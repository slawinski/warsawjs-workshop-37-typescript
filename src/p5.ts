/**
 * Program 5 - Add local type definition to a make-shift npm library without type definition
 */

import isNotLetter from 'is-not-letter';

const x = 'abc';

function plus5(a: number) {
    return a + 5;
}

console.log(isNotLetter(x));

// console.log(plus5(isNotLetter(x)));

