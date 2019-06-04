var removeKdigits = function(num, k) {
  if (num.length === k) return '0';
  // save maximum
  let stack = [num[0]];
  let i = 1;

  while (i < num.length && k > 0) {
    const str = num[i];
    if (str >= stack[stack.length - 1]) {
      stack.push(str);
    } else {
      while (stack.length > 0 && str < stack[stack.length - 1] && k > 0) {
        stack.pop();
        k -= 1;
      }
      stack.push(str);
    }
    i += 1;
  }

  //Handle trailing zeros
  const strs = stack.slice(0, stack.length - k).join('') + num.slice(i);
  let start = 0;
  while (strs[start] === '0') start += 1;
  const final = strs.slice(start);

  return final || '0';
};
