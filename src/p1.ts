/**
 * Program 1 - Make a JS function type-safe by converting it into TypeScript
 * @param a should be an array of numbers like [1, 2, 3]
 * result should return an array with one string element like ['(1), (2), (3)']
 */

function p1(a: Array<number>) {
  if (a) {
    return a.map((x) => `(${x})`).join(' ');
  }
}

console.log(p1([1, 20, 10]));

console.log(p1([1]));

console.log('Hello there');