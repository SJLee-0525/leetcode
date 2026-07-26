/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
    const [m1, m2, ...arr] = n.toString().trim().split('').map(Number).sort((a, b) => b - a);
    return m1 * m2;
};