/**
 * @copyright https://github.com/csstools/stylelint-value-no-unknown-custom-properties
 */
'use strict';

const fs = require('fs');
const path = require('path');
const nodeResolve = require('enhanced-resolve');
const postcss = require('postcss');
const stylelint = require('stylelint');
const postcssValuesParser = require('postcss-values-parser');
const postcssValueParser = require('postcss-value-parser');

const styleResolve = nodeResolve.create({
    extensions: ['.css'],
    mainFields: ['style'],
    preferRelative: true,
    symlinks: false,
});

/**
 * Check if the given path is a valid url.
 * @param {string} url
 * @returns True if the given string is a valid url.
 */
function isUrl(url) {
    try {
        return !!(new URL(url));
    } catch (err) {
        //
    }
    return false;
}

async function resolve(source, importer) {
    return new Promise((resolve, reject) => {
        styleResolve({}, importer, source, {}, (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
}

async function getCustomPropertiesFromRoot(root) {
    // initialize custom selectors
    const customProperties = {};

    let sourceDir = __dirname;
    if (root.source && root.source.input && root.source.input.file) {
        sourceDir = path.dirname(root.source.input.file);
    }

    const importPromises = [];
    root.walkAtRules('import', (atRule) => {
        const fileName = postcssValueParser(atRule.params)
            .nodes[0].value
            .replace(/url\(/, '')
            .replace(/\)$/, '')
            .replace(/['|"]/g, '')
            .replace(/^~/, '');

        if (isUrl(fileName)) {
            return;
        }

        importPromises.push(
            resolve(fileName, sourceDir)
                .then((resolvedFileName) => getCustomPropertiesFromCSSFile(resolvedFileName))
                .catch(() => ({}))
        );
    });

    const properties = await Promise.all(importPromises);
    properties.forEach((propertiesFromImport) => {
        Object.assign(customProperties, {
            ...propertiesFromImport,
        });
    });

    root.walkDecls(customPropertyRegExp, decl => {
        const { prop } = decl;
        customProperties[prop] = decl.value;
    });

    return customProperties;
}

const customPropertyRegExp = /^--[A-z][\w-]*$/;

async function getCustomPropertiesFromCSSFile(from) {
    try {
        const css = await fs.promises.readFile(from, 'utf8');
        const root = postcss.parse(css, { from });
        return await getCustomPropertiesFromRoot(root);
    } catch (e) {
        return {};
    }
}

const ruleName = 'csstools/value-no-unknown-custom-properties';

const messages = stylelint.utils.ruleMessages(ruleName, {
    unexpected: (name, prop) => `Unexpected custom property "${name}" inside declaration "${prop}".`,
});

function validateDecl(decl, { result, customProperties }) {
    const valueAST = postcssValuesParser.parse(decl.value);
    validateValueAST(valueAST, {
        result,
        customProperties,
        decl,
    });
}

function validateValueAST(ast, { result, customProperties, decl }) {
    if (!Object(ast.nodes).length) {
        return;
    }
    ast.nodes.forEach(node => {
        if (isVarFunction(node)) {
            const [propertyNode,, ...fallbacks] = node.nodes;
            const propertyName = propertyNode.value;

            if (propertyName in customProperties) {
                return;
            }

            if (fallbacks.length) {
                validateValueAST({
                    nodes: fallbacks.filter(isVarFunction),
                }, {
                    result,
                    customProperties,
                    decl,
                });
                return;
            }

            stylelint.utils.report({
                message: messages.unexpected(propertyName, decl.prop),
                node: decl,
                result,
                ruleName,
                word: String(propertyName),
            });
        } else {
            validateValueAST(node, {
                result,
                customProperties,
                decl,
            });
        }
    });
}


const isVarFunction = (node) => node.type === 'func' && node.name === 'var' && node.nodes[0].isVariable;

function validateResult(result, customProperties) {
    result.root.walkDecls(decl => {
        if (hasCustomPropertyReference(decl)) {
            validateDecl(decl, {
                result,
                customProperties,
            });
        }
    });
}

const customPropertyReferenceRegExp = /(^|[^\w-])var\([\W\w]+\)/; // whether a declaration references a custom property

const hasCustomPropertyReference = (decl) => customPropertyReferenceRegExp.test(decl.value);

const plugin = stylelint.createPlugin(ruleName, (method) => {
    const customPropertiesPromise = {};
    return async (root, result) => {
        const isMethodValid = stylelint.utils.validateOptions(result, ruleName, {
            actual: method,
            possible() {
                return isMethodEnabled(method) || isMethodDisabled(method);
            },
        });

        if (isMethodValid && isMethodEnabled(method)) {
            // all custom properties from the file and imports
            const customProperties = {
                ...(await customPropertiesPromise),
                ...(await getCustomPropertiesFromRoot(root)),
            };
            validateResult(result, customProperties);
        }
    };
});

const isMethodEnabled = (method) => method === true;
const isMethodDisabled = (method) => method === null || method === false;

exports.default = plugin;
exports.ruleName = ruleName;
