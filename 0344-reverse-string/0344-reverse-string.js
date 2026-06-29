/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  const d = [...s];
  for (let i = 0; i < s.length; i++) s[s.length - i - 1] = d[i];
};