/* const canSumBe = (target, array) => {
  if (target === 0) return true;
  if (target < 0) return false;
  for (let num of array) {
    const remainder = target - num;
    if (canSumBe(remainder, array) === true) return true;
  }
  return false;
}; */

const canSumBeAdv = (target, array, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return true;
  if (target < 0) return false;
  for (let num of array) {
    const remainder = target - num;
    if (canSumBeAdv(remainder, array, memo) === true) {
      memo[target] = true;
      return true;
    }
  }
  memo[target] = false;
  return false;
};

console.log('test with (7,[2,3])', canSumBeAdv(7, [2, 3]));
console.log(
  'test with (7,[5, 3, 4, 7])',
  canSumBeAdv(7, [5, 3, 4, 7])
);
console.log('test with (7,[2,4])', canSumBeAdv(7, [2, 4]));
console.log('test with (8,[2,3,5])', canSumBeAdv(8, [2, 3, 5]));
console.log('test with (300,[7,14])', canSumBeAdv(300, [7, 14]));
