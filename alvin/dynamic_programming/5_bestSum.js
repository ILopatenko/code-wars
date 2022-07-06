const bestSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  let shortestCombination = null;
  for (let num of numbers) {
    const remainder = targetSum - num;
    if (remainder < 0) {
      return null;
    }
    const remainderCombination = bestSum(remainder, numbers, memo);
    if (remainderCombination !== null) {
      const regularCombination = [...remainderCombination, num];
      if (
        shortestCombination === null ||
        regularCombination.length < shortestCombination.length
      )
        shortestCombination = regularCombination;
    }
  }
  memo[targetSum] = shortestCombination;
  return shortestCombination;
};
console.log(`bestSum for (7,[5,3,4,7])`, bestSum(7, [5, 3, 4, 7]));
console.log(
  `bestSum for (125,[5,3,4,7])`,
  bestSum(1500, [5, 3, 4, 7])
);
