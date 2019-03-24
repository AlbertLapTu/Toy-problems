//Standard fib O(2^n)
var fibonacci = n => {
  if (n <= 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

//My attempt
var dpFib = n => {
  let memo = {};

  if (n <= 2) return 1;

  if (!memo[n]) {
    memo[n] = dpFib(n - 1) + dpFib(n - 2);
  } else {
    return memo[n];
  }
  return dpFib(n - 1) + dpFib(n - 2);
};

//Cleaned up
var dynamicFib = (n, memo = []) => {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  var res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
};
