/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const s = x.toString().trim().split('');

    if (s.join('') === s.reverse().join('')) return true;
    return false;
};