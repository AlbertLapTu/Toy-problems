/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let min = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    maxProfit = Math.max(prices[i] - min, maxProfit);
  }

  return maxProfit;
};

//Find the minimum stock (default at position 0)
//Update minimum as we traverse through the array
//Update maximum profit as we trafverse through array
