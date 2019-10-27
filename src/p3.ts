/**
 * Program 3 - Introduce ts-essentials and type aliases
 */

import isLetter from 'is-letter';
import {MarkRequired, StrictOmit} from "ts-essentials";

type A = Array<string>|null;

type B = {
    a: A,
    x: number,
};

type C = {
    a: A,
    x?: number,
}

type CReq = MarkRequired<C, 'x'>;


type D = StrictOmit<B, 'x'>;

const b: B ={
    a: ['abc', 'x', 'def', 'y', 'Z'],
    x: 2,
};

const c: C ={
    a: ['abc', 'x', 'def', 'y', 'Z'],
};

const cr: CReq = {a: [], x: 1}

const d: D = {
    a: ['abc', 'x', 'def', 'y', 'Z'],

}

function p3(b: B) {
    // [1, 2, 3] => ['(1), (2), (3)']
    if (b.a) {
        return b.a.filter(isLetter)
            .map((x) => `(${x})`)
            .slice(0, b.x)
            .join(' ');
    }
}

console.log(p3(b));

console.log(p3({a: null, x: 1}));