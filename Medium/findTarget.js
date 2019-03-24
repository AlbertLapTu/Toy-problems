/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
  let hashMap = {};

  for (let i = 1; i <= N; i++) {
    if (!hashMap[i]) {
      hashMap[i] = [];
    }
  }

  for (let i = 0; i < trust.length; i++) {
    const truster = trust[i][0];
    const trustee = trust[i][1];

    if (hashMap[truster]) {
      delete hashMap[truster];
    }
    if (hashMap[trustee]) {
      hashMap[trustee].push(truster);
    }
  }

  if (Object.keys(hashMap).length === 1) {
    for (let key in hashMap) {
      let size = hashMap[key].length;
      if (size === N - 1) {
        return key;
      }
      return -1;
    }
  }
  return -1;
};

//Faster answer

var findJudge = function(N, trust) {
  var heTrust = new Array(N + 1).fill(0);
  var trustHim = new Array(N + 1).fill(0);

  //DEBUG THIS
  for (var i = 0; i < trust.length; i++) {
    heTrust[trust[i][0]]++;
    trustHim[trust[i][1]]++;
  }

  var result = [];
  var maxTrust = N - 1;
  for (var i = 1; i <= N; i++) {
    if (heTrust[i] === 0 && trustHim[i] === maxTrust) {
      result.push(i);
    }
  }

  return result.length === 1 ? result[0] : -1;
};
