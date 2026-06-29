/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  let curStock = null;

  for (let d = 0; d < prices.length - 1; d++) {
    if (curStock !== null) {
      if (prices[d] < prices[d + 1]) continue;
      else {
        profit += prices[d] - curStock;
        curStock = null;
      }
    } else {
      if (prices[d] > prices[d + 1]) continue;
      else curStock = prices[d];
    }
  }

  if (curStock !== null && curStock < prices[prices.length - 1]) profit += prices[prices.length - 1] - curStock;

  return profit;
};