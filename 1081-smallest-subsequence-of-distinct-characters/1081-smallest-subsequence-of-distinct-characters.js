/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function (s) {
    const stack = Array();

    const used = Array(26).fill(0), last = Array(26).fill(-1);

    for (let l = s.length - 1; l >= 0; l--) {
        if (last[s[l].charCodeAt() - 97] === -1) last[s[l].charCodeAt() - 97] = l;
    };

    function isAgain(w, i) {
        for (let j = i + 1; j < s.length; j++) {
            if (w === s[j]) return true;
        };

        return false;
    };

    for (let c = 0; c < s.length; c++) {
        const ascii = s[c].charCodeAt() - 97;
        if (used[ascii]) continue;

        while (stack.length && stack[stack.length - 1] > s[c] && last[stack[stack.length - 1].charCodeAt() - 97] > c) {
            used[stack.pop().charCodeAt() - 97]--;
        };

        if (!used[ascii]) {
            used[ascii]++;
            stack.push(s[c]);
        };
    };

    return stack.join('');
};