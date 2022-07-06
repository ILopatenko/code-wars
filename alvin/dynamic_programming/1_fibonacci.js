//Memoization

const fibMem = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fibMem(n - 1, memo) + fibMem(n - 2, memo);
  return memo[n];
};

console.log('Fibonacci for n=6', fibMem(6));
console.log('Fibonacci for n=7', fibMem(7));
console.log('Fibonacci for n=8', fibMem(8));
console.log('Fibonacci for n=50', fibMem(50));
console.log('Fibonacci for n=100', fibMem(100));
console.log('Fibonacci for n=500', fibMem(500));
console.log('Fibonacci for n=5000', fibMem(1476));
