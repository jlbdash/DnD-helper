"use strict";

module.exports = {
  env: {
    es6: true,
  },
  parser: "@babel/eslint-parser",
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: true,
  },
  rules: {
    //using strict mode all the time
    strict: ["error", "global"],
    // not wanting to use var, just const and let
    "no-var": "error",
    // prefer const to let (unchanging)
    // 'prefer-cont': 'error',
    // one variable at a time
    "one-var": ["error", "never"],
    // camel case preferred
    camelcase: "error",
    // weed out unused variables
    // 'no-unused-vars': 'error',
    // can see all variables easier
    "no-multi-assign": "error",
    // preferred single quotes first
    quotes: ["error", "single"],
    // concise and no unexpected outcome for arrays and objects
    "no-array-constructor": "error",
    "no-new-object": "error",
    // quotes where needed
    "quote-props": ["error", "as-needed"],
    // no using 'new' constructors for type casting
    "no-new-wrappers": "error",
    // remove unnecessary boolean negations
    "no-extra-boolean-cast": "error",
    // comparison with swtiched normalicy
    yoda: "error",
    // triple equalities wanted
    eqeqeq: "error",
    // no complex ternary statement
    "no-unneeded-ternary": "error",
    "no-nested-ternary": "error",
  },
};
