/**
 * Program 2 - Try out an npm library with build in type definitions
 */

import isLetter from 'is-letter';

/**
 *
 * @param a - Array of strings ['a', 'bb', 'c']
 * result - should eliminate non-one-letter characters ['a', 'c']
 */

function p2(a: Array<string>|null) {
    if (a) {
        return a.filter(isLetter).map((x) => `(${x})`).join(' ');
    }
}

console.log(p2(['abc', 'x', 'def', 'y', 'Z']));