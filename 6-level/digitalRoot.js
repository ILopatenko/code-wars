//https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript
const testData = 456;
const expecterResult = 6;
const digital_root = (a) => {
  console.clear();
  console.log(`\n\n   ===> START HERE !!!!`);
  console.log(`test data input: "${a}"`);
  console.log(`expected result: "${expecterResult}"`);
  let value = a;

  const helper = (b) => {
    let sum = 0;
    console.log(`helper called`);
    console.log(`initial value is "${b}"`);
    let arr = b.toString().split('');
    arr.forEach((e) => (sum += +e));
    console.log(sum);
    value = sum;
    console.log(`final value value is "${value}"`);
  };

  while (value >= 10) {
    helper(value);
  }
  return value;
};

const actualResult = digital_root(testData);
const isEqual = actualResult === expecterResult;
console.log(`\n   ===>FINAL RESULT`, isEqual);

/* const digital_root = (a) => {
  let value = a;
  const helper = (b) => {
    let sum = 0;
    let arr = b.toString().split('');
    arr.forEach((e) => (sum += +e));
    value = sum;
  };
  while (value >= 10) {
    helper(value);
  }
  return value;
}; */
