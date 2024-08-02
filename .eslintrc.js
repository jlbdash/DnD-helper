'use strict';

module.exports = {
    env:{
        ES6: true,
    },
    rules: {
        //using strict mode all the time
        'strict': ['error', 'global'],
        // not wanting to use var, just const and let
        'no-var': 'error',
        // prefer const to let (unchanging)
        'prefer-cont': 'error',
        // one variable at a time
        'one-var': ['error', 'never'],
        // camel case preferred
        'camelcase': 'error',
        // weed out unused variables
        'no-unused-vars':'error',
        // can see all variables easier
        'no-multi-assign':'error',
        // preferred single quotes first
        'quotes':['error', 'single'],
        'no-array-constructor': 'error',
    }
};