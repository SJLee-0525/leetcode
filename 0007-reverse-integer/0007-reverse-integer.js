/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let res;

  if (x < 0) res = Number(x.toString().split("").slice(1).reverse().join("")) * -1;
  else res = Number(x.toString().split("").reverse().join(""));

  if (res < -2147483648 || 2147483647 < res) return 0;
  return res;
};