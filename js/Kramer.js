const [a1, b1, c1, a2, b2, c2] = [1, 3, 2, 9, 2, 7];
const det = a1 * b2 - a2 * b1;
const dx1 = c1 * b2 - c2 * b1;
const dx2 = a1 * c2 - a2 * c1;
const x1 = dx1 / det;
const x2 = dx2 / det;
console.log(x1, x2);
