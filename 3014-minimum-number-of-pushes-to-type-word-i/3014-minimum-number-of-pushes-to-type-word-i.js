/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    const charCnts = Array(26).fill(0);
    for (const c of word) charCnts[c.charCodeAt() - 97]++;
    charCnts.sort((a, b) => b - a);

    const res = charCnts.reduce((a, c, i) => a += c * (Math.trunc(i / 8) + 1), 0);
    return res;
};