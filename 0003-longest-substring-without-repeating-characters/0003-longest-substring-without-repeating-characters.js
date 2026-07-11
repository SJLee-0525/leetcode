/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const check = Array(128).fill(0);

    let maxSize = 0, size = 0;
    let l = 0, r = 0;

    while (r < s.length) {
        const a = s[r].charCodeAt();

        if (l === r || check[a] === 0) {
            check[a]++;
            r++;
            size++;
        } else {
            check[s[l].charCodeAt()]--;
            l++;
            size--;
        };

        if (maxSize < size) maxSize = size;
    };

    return maxSize;
};