var sumEvenAfterQueries = function(A, queries) {
  let results = [];

  for (let i = 0; i < queries.length; i++) {
    A[queries[i][1]] += queries[i][0];
    let evenSum = 0;
    for (let j = 0; j < A.length; j++) {
      if (A[j] % 2 === 0) {
        evenSum += A[j];
      }
    }
    results.push(evenSum);
  }
  return results;
};
