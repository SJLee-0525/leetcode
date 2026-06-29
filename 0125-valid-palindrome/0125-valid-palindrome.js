/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const chars = new Array();

  s.split("").forEach((s) => {
    const a = s.charCodeAt();

    if ((48 <= a && a < 58) || (65 <= a && a < 91) || (97 <= a && a < 123)) chars.push(s.toLowerCase());
  });

  for (let i = 0; i < Math.floor(chars.length / 2); i++) {
    if (chars[i] !== chars[chars.length - i - 1]) return false;
  }

  return true;
};