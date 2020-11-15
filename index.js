module.exports = {
    ignoreFiles: [
        'node_modules/**/*',
        'dist/**/*',
        'public/**/*',
    ],
    plugins: [
        'stylelint-order',
    ],
    rules: {
        /**
         * https://stylelint.io/user-guide/rules/color-no-invalid-hex
         * Disallow invalid hex colors.
         */
        'color-no-invalid-hex': [
            true,
            {
                severity: 'error',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/color-hex-case
         * Specify lowercase or uppercase for hex colors (Autofixable).
         */
        'color-hex-case': [
            'lower',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/font-family-no-duplicate-names
         * Disallow duplicate font family names.
         */
        'font-family-no-duplicate-names': [
            true,
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/font-family-no-missing-generic-family-keyword
         * Disallow missing generic families in lists of font family names.
         */
        'font-family-no-missing-generic-family-keyword': [
            true,
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/font-family-name-quotes
         * Specify whether or not quotation marks should be used around font family names.
         */
        'font-family-name-quotes': [
            'always-unless-keyword',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/function-calc-no-unspaced-operator
         * Disallow an unspaced operator within calc functions.
         */
        'function-calc-no-unspaced-operator': [
            true,
            {
                severity: 'error',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/function-linear-gradient-no-nonstandard-direction
         * Disallow direction values in linear-gradient() calls that are not valid according to the standard syntax.
         */
        'function-linear-gradient-no-nonstandard-direction': [
            true,
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/function-comma-newline-before
         * Require a newline or disallow whitespace before the commas of functions.
         */
        'function-comma-newline-before': [
            'never-multi-line',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/function-comma-space-after
         * Require a single space or disallow whitespace after the commas of functions.
         */
        'function-comma-space-after': [
            'always-single-line',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/function-comma-space-before
         * Require a single space or disallow whitespace before the commas of functions.
         */
        'function-comma-space-before': [
            'never',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/function-max-empty-lines
         * Limit the number of adjacent empty lines within functions.
         */
        'function-max-empty-lines': [
            0,
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/function-name-case
         * Specify lowercase or uppercase for function names.
         */
        'function-name-case': [
            'lower',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/function-parentheses-newline-inside
         * Require a newline or disallow whitespace on the inside of the parentheses of functions.
         */
        'function-parentheses-newline-inside': [
            'always-multi-line',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/function-parentheses-space-inside
         * Require a single space or disallow whitespace on the inside of the parentheses of functions.
         */
        'function-parentheses-space-inside': [
            'never-single-line',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/function-url-quotes
         * Require or disallow quotes for urls.
         */
        'function-url-quotes': [
            'always',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/function-whitespace-after
         * Require or disallow whitespace after functions.
         */
        'function-whitespace-after': [
            'always',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/string-no-newline
         * Disallow (unescaped) newlines in strings.
         */
        'string-no-newline': [
            true,
            {
                severity: 'error',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/string-quotes
         * Specify single or double quotes around strings (Autofixable).
         */
        'string-quotes': [
            'single',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/number-no-trailing-zeros
         * Disallow trailing zeros in numbers (Autofixable).
         */
        'number-no-trailing-zeros': [
            true,
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/unit-no-unknown
         * Disallow unknown units.
         */
        'unit-no-unknown': [
            true,
            {
                severity: 'error',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/length-zero-no-unit
         * Disallow units for zero lengths (Autofixable).
         */
        'length-zero-no-unit': [
            true,
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/unit-case
         * Specify lowercase or uppercase for units.
         */
        'unit-case': [
            'lower',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/property-no-unknown
         * Disallow unknown properties.
         */
        'property-no-unknown': [
            true,
            {
                ignoreProperties: [
                    'appearance',
                    'voice-family',
                    '-webkit-appearance',
                    '-webkit-overflow-scrolling',
                    '-webkit-tap-highlight-color',
                    '-webkit-line-clamp',
                    'composes',
                    'compose-with',
                ],
                ignoreSelectors: [
                    ':export',
                    '/^:import/',
                ],
                severity: 'error',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/property-no-vendor-prefix
         * Disallow vendor prefixes for properties.
         */
        'property-no-vendor-prefix': [
            true,
            {
                ignoreProperties: [
                    'appearance',
                    'overflow-scrolling',
                    'line-clamp',
                    'box-orient',
                ],
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/property-case
         * Specify lowercase or uppercase for properties.
         */
        'property-case': [
            'lower',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/value-no-vendor-prefix
         * Disallow vendor prefixes for values.
         */
        'value-no-vendor-prefix': [
            true,
            {
                ignoreValues: [
                    'box',
                ],
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/value-keyword-case
         * Specify lowercase or uppercase for keywords values.
         */
        'value-keyword-case': [
            'lower',
            {
                ignoreKeywords: [
                    '/^U+/',
                ],
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/value-list-comma-newline-after
         * Require a newline or disallow whitespace after the commas of value lists.
         */
        'value-list-comma-newline-after': [
            'never-multi-line',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/value-list-comma-newline-before
         * Require a newline or disallow whitespace before the commas of value lists.
         */
        'value-list-comma-newline-before': [
            'never-multi-line',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/value-list-comma-space-after
         * Require a single space or disallow whitespace after the commas of value lists.
         */
        'value-list-comma-space-after': [
            'always',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/value-list-comma-space-before
         * Require a single space or disallow whitespace before the commas of value lists.
         */
        'value-list-comma-space-before': [
            'never',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/value-list-max-empty-lines
         * Limit the number of adjacent empty lines within value lists.
         */
        'value-list-max-empty-lines': [
            0,
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/keyframe-declaration-no-important
         * Disallow !important within keyframe declarations.
         */
        'keyframe-declaration-no-important': [
            true,
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/time-min-milliseconds
         * Specify the minimum number of milliseconds for time values.
         */
        'time-min-milliseconds': [
            0.0001,
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-properties
         * Disallow duplicate properties within declaration blocks.
         */
        'declaration-block-no-duplicate-properties': [
            true,
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/declaration-block-no-shorthand-property-overrides
         * Disallow shorthand properties that override related longhand properties within declaration blocks.
         */
        'declaration-block-no-shorthand-property-overrides': [
            true,
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/block-no-empty
         * Disallow empty blocks.
         */
        'block-no-empty': [
            true,
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/declaration-no-important
         * Disallow !important within declarations.
         */
        'declaration-no-important': [
            true,
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/declaration-block-single-line-max-declarations
         * Limit the number of declaration within single line declaration blocks.
         */
        'declaration-block-single-line-max-declarations': [
            1,
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/declaration-bang-space-after
         * Require a single space or disallow whitespace after the bang of declarations.
         */
        'declaration-bang-space-after': [
            'never',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/declaration-bang-space-before
         * Require a single space or disallow whitespace before the bang of declarations.
         */
        'declaration-bang-space-before': [
            'always',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/declaration-colon-space-after
         * Require a single space or disallow whitespace after the colon of declarations.
         */
        'declaration-colon-space-after': [
            'always',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/declaration-colon-space-before
         * Require a single space or disallow whitespace before the colon of declarations.
         */
        'declaration-colon-space-before': [
            'never',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/declaration-block-semicolon-newline-before
         * Require a newline or disallow whitespace before the semicolons of declaration blocks.
         */
        'declaration-block-semicolon-newline-before': [
            'never-multi-line',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/declaration-block-semicolon-space-after
         * Require a single space or disallow whitespace after the semicolons of declaration blocks.
         */
        'declaration-block-semicolon-space-after': [
            'always-single-line',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/declaration-block-semicolon-space-before
         * Require a single space or disallow whitespace before the semicolons of declaration blocks.
         */
        'declaration-block-semicolon-space-before': [
            'never',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/declaration-block-trailing-semicolon
         * Require or disallow a trailing semicolon within declaration blocks.
         */
        'declaration-block-trailing-semicolon': [
            'always',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/block-closing-brace-empty-line-before
         * Require or disallow an empty line before the closing brace of blocks.
         */
        'block-closing-brace-empty-line-before': [
            'never',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/block-closing-brace-newline-after
         * Require a newline or disallow whitespace after the closing brace of blocks.
         */
        'block-closing-brace-newline-after': [
            'always',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/block-closing-brace-newline-before
         * Require a newline or disallow whitespace before the closing brace of blocks.
         */
        'block-closing-brace-newline-before': [
            'always-multi-line',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/block-closing-brace-space-after
         * Require a single space or disallow whitespace after the closing brace of blocks.
         */
        'block-closing-brace-space-after': [
            'always-single-line',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/block-closing-brace-space-before
         * Require a single space or disallow whitespace before the closing brace of blocks.
         */
        'block-closing-brace-space-before': [
            'always-single-line',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/block-opening-brace-newline-after
         * Require a newline after the opening brace of blocks.
         */
        'block-opening-brace-newline-after': [
            'always-multi-line',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/block-opening-brace-newline-before
         * Require a newline or disallow whitespace before the opening brace of blocks.
         */
        'block-opening-brace-newline-before': [
            'never-single-line',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/block-opening-brace-space-after
         * Require a single space or disallow whitespace after the opening brace of blocks.
         */
        'block-opening-brace-space-after': [
            'always-single-line',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/block-opening-brace-space-before
         * Require a single space or disallow whitespace before the opening brace of blocks.
         */
        'block-opening-brace-space-before': [
            'always',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/selector-pseudo-class-no-unknown
         * Disallow unknown pseudo-class selectors.
         */
        'selector-pseudo-class-no-unknown': [
            true,
            {
                ignorePseudoClasses: [
                    'focus-visible',
                    'export',
                    'import',
                    'global',
                    'local',
                    'external',
                ],
                severity: 'error',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/selector-pseudo-element-no-unknown
         * Disallow unknown pseudo-element selectors.
         */
        'selector-pseudo-element-no-unknown': [
            true,
            {
                severity: 'error',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/selector-max-empty-lines
         * Limit the number of adjacent empty lines within selectors.
         */
        'selector-max-empty-lines': [
            0,
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/selector-no-qualifying-type
         * Disallow qualifying a selector by type.
         */
        'selector-no-qualifying-type': [
            false,
            {
                ignore: [
                    'attribute',
                    'class',
                    'id',
                ],
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/selector-no-vendor-prefix
         * Disallow vendor prefixes for selectors.
         */
        'selector-no-vendor-prefix': [
            true,
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/selector-attribute-brackets-space-inside
         * Require a single space or disallow whitespace on the inside of the brackets within attribute selectors.
         */
        'selector-attribute-brackets-space-inside': [
            'never',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/selector-attribute-operator-space-after
         * Require a single space or disallow whitespace after operators within attribute selectors.
         */
        'selector-attribute-operator-space-after': [
            'never',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/selector-attribute-operator-space-before
         * Require a single space or disallow whitespace before operators within attribute selectors.
         */
        'selector-attribute-operator-space-before': [
            'never',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/selector-attribute-quotesquotes
         * Require or disallow quotes for attribute values.
         */
        'selector-attribute-quotes': [
            'always',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/selector-combinator-space-after
         * Require a single space or disallow whitespace after the combinators of selectors.
         */
        'selector-combinator-space-after': [
            'always',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/selector-combinator-space-before
         * Require a single space or disallow whitespace before the combinators of selectors.
         */
        'selector-combinator-space-before': [
            'always',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/selector-descendant-combinator-no-non-space
         * Disallow non-space characters for descendant combinators of selectors.
         */
        'selector-descendant-combinator-no-non-space': [
            true,
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/selector-pseudo-class-case
         * Specify lowercase or uppercase for pseudo-class selectors.
         */
        'selector-pseudo-class-case': [
            'lower',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/selector-pseudo-class-parentheses-space-inside
         * Require a single space or disallow whitespace on the inside of the parentheses within pseudo-class selectors.
         */
        'selector-pseudo-class-parentheses-space-inside': [
            'never',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/selector-pseudo-element-case
         * Specify lowercase or uppercase for pseudo-element selectors.
         */
        'selector-pseudo-element-case': [
            'lower',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/selector-pseudo-element-colon-notation
         * Specify single or double colon notation for applicable pseudo-elements.
         */
        'selector-pseudo-element-colon-notation': [
            'double',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/selector-type-case
         * Specify lowercase or uppercase for type selector.
         */
        'selector-type-case': [
            'lower',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/selector-list-comma-newline-after
         * Require a newline or disallow whitespace after the commas of selector lists.
         */
        'selector-list-comma-newline-after': [
            'always-multi-line',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/selector-list-comma-newline-before
         * Require a newline or disallow whitespace before the commas of selector lists.
         */
        'selector-list-comma-newline-before': [
            'never-multi-line',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/selector-list-comma-space-after
         * Require a single space or disallow whitespace after the commas of selector lists.
         */
        'selector-list-comma-space-after': [
            'always-single-line',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/selector-list-comma-space-before
         * Require a single space or disallow whitespace before the commas of selector lists.
         */
        'selector-list-comma-space-before': [
            'never',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/rule-empty-line-before
         * Require or disallow an empty line before rules (Autofixable).
         */
        'rule-empty-line-before': [
            'always-multi-line',
            {
                except: [
                    'first-nested',
                ],
                ignore: [
                    'after-comment',
                ],
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/media-feature-name-no-unknown
         * Disallow unknown media feature names.
         */
        'media-feature-name-no-unknown': [
            true,
            {
                severity: 'error',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/media-feature-name-no-vendor-prefix
         * Disallow vendor prefixes for media feature names.
         */
        'media-feature-name-no-vendor-prefix': [
            true,
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/media-feature-colon-space-after
         * Require a single space or disallow whitespace after the colon in media features.
         */
        'media-feature-colon-space-after': [
            'always',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/media-feature-colon-space-before
         * Require a single space or disallow whitespace before the colon in media features.
         */
        'media-feature-colon-space-before': [
            'never',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/media-feature-name-case
         * Specify lowercase or uppercase for media feature names.
         */
        'media-feature-name-case': [
            'lower',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/media-feature-parentheses-space-inside
         * Require a single space or disallow whitespace on the inside of the parentheses within media features.
         */
        'media-feature-parentheses-space-inside': [
            'never',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/media-feature-range-operator-space-after
         * Require a single space or disallow whitespace after the range operator in media features.
         */
        'media-feature-range-operator-space-after': [
            'always',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/media-feature-range-operator-space-before
         * Require a single space or disallow whitespace before the range operator in media features.
         */
        'media-feature-range-operator-space-before': [
            'always',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/media-query-list-comma-newline-after
         * Require a newline or disallow whitespace after the commas of media query lists.
         */
        'media-query-list-comma-newline-after': [
            'always-multi-line',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/media-query-list-comma-newline-before
         * Require a newline or disallow whitespace before the commas of media query lists.
         */
        'media-query-list-comma-newline-before': [
            'never-multi-line',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/media-query-list-comma-space-after
         * Require a single space or disallow whitespace after the commas of media query lists.
         */
        'media-query-list-comma-space-after': [
            'always-single-line',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/media-query-list-comma-space-before
         * Require a single space or disallow whitespace before the commas of media query lists.
         */
        'media-query-list-comma-space-before': [
            'never',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/at-rule-no-unknown
         * Disallow unknown at-rules.
         */
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: [
                    'mixin',
                    'include',
                    'extend',
                    'each',
                    'value',
                ],
                severity: 'error',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/at-rule-no-vendor-prefix
         * Disallow vendor prefixes for at-rules.
         */
        'at-rule-no-vendor-prefix': [
            true,
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/at-rule-empty-line-before
         * Require or disallow an empty line before at-rules (Autofixable).
         */
        'at-rule-empty-line-before': [
            'always',
            {
                except: [
                    'blockless-after-same-name-blockless',
                    'first-nested',
                ],
                ignore: [
                    'after-comment',
                ],
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/at-rule-name-case
         * Specify lowercase or uppercase for at-rules names (Autofixable).
         */
        'at-rule-name-case': [
            'lower',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/at-rule-name-newline-after
         * Require a newline after at-rule names.
         */
        'at-rule-name-newline-after': [
            'always-multi-line',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/at-rule-name-space-after
         * Require a single space after at-rule names.
         */
        'at-rule-name-space-after': [
            'always-single-line',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/at-rule-semicolon-newline-after
         * Require a newline after the semicolon of at-rules.
         */
        'at-rule-semicolon-newline-after': [
            'always',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/at-rule-semicolon-space-before
         * Require a single space or disallow whitespace before the semicolons of at rules.
         */
        'at-rule-semicolon-space-before': [
            'never',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/comment-no-empty
         *  Disallow empty comments.
         */
        'comment-no-empty': [
            true,
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/comment-empty-line-before
         * Require or disallow an empty line before comments (Autofixable).
         */
        'comment-empty-line-before': [
            'always',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/comment-whitespace-inside
         * Require or disallow whitespace on the inside of comment markers.
         */
        'comment-whitespace-inside': [
            'always',
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/no-duplicate-at-import-rules
         * Disallow duplicate @import rules within a stylesheet.
         */
        'no-duplicate-at-import-rules': [
            true,
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/no-duplicate-selectors
         * Disallow duplicate selectors.
         */
        'no-duplicate-selectors': [
            true,
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/no-empty-source
         * Disallow empty sources.
         */
        'no-empty-source': [
            true,
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/no-extra-semicolons
         * Disallow extra semicolons.
         */
        'no-extra-semicolons': [
            true,
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/no-invalid-double-slash-comments
         * Disallow double-slash comments (//...) which are not supported by CSS.
         */
        'no-invalid-double-slash-comments': [
            true,
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/max-nesting-depth
         * Limit the depth of nesting.
         */
        'max-nesting-depth': 10,
        /**
         * https://stylelint.io/user-guide/rules/indentation
         * Specify indentation (Autofixable).
         */
        'indentation': [
            4,
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/max-empty-lines
         * Limit the number of adjacent empty lines.
         */
        'max-empty-lines': [
            1,
            {
                ignore: [
                    'comments',
                ],
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/no-eol-whitespace
         * Disallow end-of-line whitespace.
         */
        'no-eol-whitespace': [
            true,
            {
                severity: 'warning',
            },
        ],
        /**
         * https://stylelint.io/user-guide/rules/no-missing-end-of-source-newline
         * Disallow missing end-of-source newlines (Autofixable).
         */
        'no-missing-end-of-source-newline': [
            true,
            {
                severity: 'warning',
            },
        ],
        'order/order': [
            [
                'custom-properties',
                'declarations',
            ],
            {
                severity: 'warning',
            },
        ],
        'order/properties-order': [
            [
                'position',
                'top',
                'right',
                'bottom',
                'left',
                'z-index',
                'display',
                'flex',
                'flex-grow',
                'flex-shrink',
                'flex-basis',
                'flex-flow',
                'flex-direction',
                'flex-wrap',
                'justify-content',
                'align-content',
                'align-items',
                'align-self',
                'order',
                'float',
                'clear',
                'box-sizing',
                'width',
                'min-width',
                'max-width',
                'height',
                'min-height',
                'max-height',
                'margin',
                'margin-top',
                'margin-right',
                'margin-bottom',
                'margin-left',
                'padding',
                'padding-top',
                'padding-right',
                'padding-bottom',
                'padding-left',
                'overflow',
                'overflow-x',
                'overflow-y',
                'color',
                'font',
                'font-family',
                'font-size',
                'font-weight',
                'font-style',
                'font-variant',
                'font-size-adjust',
                'font-stretch',
                'font-effect',
                'font-emphasize',
                'font-emphasize-position',
                'font-emphasize-style',
                'font-smooth',
                'line-height',
                'direction',
                'letter-spacing',
                'white-space',
                'text-align',
                'text-align-last',
                'text-transform',
                'text-decoration',
                'text-emphasis',
                'text-emphasis-color',
                'text-emphasis-style',
                'text-emphasis-position',
                'text-indent',
                'text-justify',
                'text-outline',
                'text-wrap',
                'text-overflow',
                'text-overflow-ellipsis',
                'text-overflow-mode',
                'text-orientation',
                'text-shadow',
                'vertical-align',
                'word-wrap',
                'word-break',
                'word-spacing',
                'overflow-wrap',
                'tab-size',
                'hyphens',
                'unicode-bidi',
                'columns',
                'column-count',
                'column-fill',
                'column-gap',
                'column-rule',
                'column-rule-color',
                'column-rule-style',
                'column-rule-width',
                'column-span',
                'column-width',
                'page-break-after',
                'page-break-before',
                'page-break-inside',
                'src',
                'list-style',
                'list-style-position',
                'list-style-type',
                'list-style-image',
                'table-layout',
                'empty-cells',
                'caption-side',
                'background',
                'background-color',
                'background-image',
                'background-repeat',
                'background-position',
                'background-position-x',
                'background-position-y',
                'background-size',
                'background-clip',
                'background-origin',
                'background-attachment',
                'background-blend-mode',
                'box-decoration-break',
                'border',
                'border-width',
                'border-style',
                'border-color',
                'border-top',
                'border-top-width',
                'border-top-style',
                'border-top-color',
                'border-right',
                'border-right-width',
                'border-right-style',
                'border-right-color',
                'border-bottom',
                'border-bottom-width',
                'border-bottom-style',
                'border-bottom-color',
                'border-left',
                'border-left-width',
                'border-left-style',
                'border-left-color',
                'border-radius',
                'border-top-left-radius',
                'border-top-right-radius',
                'border-bottom-right-radius',
                'border-bottom-left-radius',
                'border-image',
                'border-image-source',
                'border-image-slice',
                'border-image-width',
                'border-image-outset',
                'border-image-repeat',
                'border-collapse',
                'border-spacing',
                'outline',
                'outline-width',
                'outline-style',
                'outline-color',
                'outline-offset',
                'box-shadow',
                'transform',
                'transform-origin',
                'transform-style',
                'backface-visibility',
                'perspective',
                'perspective-origin',
                'visibility',
                'cursor',
                'opacity',
                'filter',
                'backdrop-filter',
                'transition',
                'transition-delay',
                'transition-timing-function',
                'transition-duration',
                'transition-property',
                'animation',
                'animation-name',
                'animation-duration',
                'animation-play-state',
                'animation-timing-function',
                'animation-delay',
                'animation-iteration-count',
                'animation-direction',
                'animation-fill-mode',
                'appearance',
                'clip',
                'clip-path',
                'counter-reset',
                'counter-increment',
                'resize',
                'user-select',
                'nav-index',
                'nav-up',
                'nav-right',
                'nav-down',
                'nav-left',
                'pointer-events',
                'quotes',
                'touch-action',
                'will-change',
                'zoom',
                'fill',
                'fill-rule',
                'clip-rule',
                'stroke',
            ],
            {
                severity: 'warning',
            },
        ],
    },
};