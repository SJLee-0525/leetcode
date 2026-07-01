/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const check = Array(26).fill(0);
    
    for (let i = 0; i < s.length; i++) check[s[i].charCodeAt() - 97]++;
    for (let j = 0; j < t.length; j++) check[t[j].charCodeAt() - 97]--;

    if (check.some((a) => a !== 0)) return false;
    return true;
};