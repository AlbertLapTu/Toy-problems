/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */

const numJewelsInStones = (J, S) => {
  let jewels = J.split('');
  let stones = S.split('');
  let total = 0;

  for (let i = 0; i < stones.length; i++) {
    if (jewels.indexOf(stones[i]) !== -1) {
      total += 1;
    }
  }
  return total;
};
