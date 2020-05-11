/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

function kidsWithMostCandies(candies, extraCandies) {
  const max = Math.max(...candies);
  const res = [];
  for (let i = 0; i < candies.length; i++) {
    const kid = candies[i];
    if (kid + extraCandies >= max) {
      res.push(true);
    } else {
      res.push(false);
    }
  }
  return res;
}

module.exports = kidsWithMostCandies;
