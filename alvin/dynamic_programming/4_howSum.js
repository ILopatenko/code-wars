const howSum = (targetSum, numbers) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSum(remainder, numbers);
    if (remainderResult !== null) {
      return [...remainderResult, num];
    }
  }
  return null;
};
/* console.log('howSum(7, [2, 3]) is ', howSum(7, [2, 3]));
console.log('howSum(7, [5, 3, 4, 7]) is ', howSum(7, [5, 3, 4, 7]));
console.log('howSum(7, [2, 4]) is ', howSum(7, [2, 4]));
console.log('howSum(8, [2, 3, 5]) is ', howSum(8, [2, 3, 5]));
console.log('howSum(300, [7, 14]) is ', howSum(300, [7, 14])); */

const howSumMemo = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSumMemo(remainder, numbers, memo);
    if (remainderResult !== null) {
      memo[num] = [...remainderResult, num];
      return memo[num];
    }
  }
  memo[targetSum] = null;
  return null;
};
console.log('howSum(7, [2, 3]) is ', howSumMemo(7, [2, 3]));
console.log(
  'howSum(7, [5, 3, 4, 7]) is ',
  howSumMemo(7, [5, 3, 4, 7])
);
console.log('howSum(7, [2, 4]) is ', howSumMemo(7, [2, 4]));
console.log('howSum(8, [2, 3, 5]) is ', howSumMemo(8, [2, 3, 5]));
console.log('howSum(300, [7, 14]) is ', howSumMemo(300, [7, 14]));
