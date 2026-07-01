/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const num = BigInt(digits.map(e => e.toString()).join('')) + 1n;
    return num.toString().trim().split('').map(Number);
};