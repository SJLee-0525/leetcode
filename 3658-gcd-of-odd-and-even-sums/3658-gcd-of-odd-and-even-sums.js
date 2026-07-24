/**
 * @param {number} n
 * @return {number}
 */
var gcdOfOddEvenSums = function(n) {
    const even = ((n * 2 + 1) * n - n) / 2;
    const odd = even - n;

    function uc(a, b) {
        return b === 0 ? a : uc(b, a % b);
    };

    return uc(odd, even);
};