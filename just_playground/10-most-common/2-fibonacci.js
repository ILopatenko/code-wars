const getNthFibonacci = (n) => {
  if (n < 0) {
    return false;
  }
  if (n === 0) {
    return 0;
  }
  if (n === 1 || n === 2) {
    return 1;
  }
  const seq = [0, 1];
  for (let i = 2; i <= n; i++) {
    let nextInSeq = seq[i - 1] + seq[i - 2];
    seq.push(nextInSeq);
  }
  return seq[seq.length - 1];
};

//const result = getNthFibonacci(2);
//console.log(`The final result is "${result}"`);

for (let i = -1; i < 30; i++) {
  console.log(
    `"${i}"th element of Fibonacci sequentance is "${getNthFibonacci(i)}"`
  );
}
