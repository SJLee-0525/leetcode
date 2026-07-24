/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function (s) {
    const stack = Array();
    const used = Array(26).fill(0);

    function isAgain(w, i) {
        for (let j = i + 1; j < s.length; j++) {
            if (w === s[j]) return true;
        };

        return false;
    };

    for (let c = 0; c < s.length; c++) {
        const ascii = s[c].charCodeAt() - 97;
        if (used[ascii]) continue;

        while (stack.length && stack[stack.length - 1] > s[c] && isAgain(stack[stack.length - 1], c)) used[stack.pop().charCodeAt() - 97]--;

        if (!used[ascii]) {
            used[ascii]++;
            stack.push(s[c]);
        };
    };

    return stack.join('');
};