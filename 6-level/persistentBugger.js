//https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript
//Persistent Bugger
const testData = 999;
const expecterResult = 4;
const persistence = (a) => {
  console.clear();
  console.log(`\n\n   ===> START HERE !!!!`);
  console.log(`test data input: "${a}"`);
  console.log(`expected result: "${expecterResult}"`);
  let value = a;
  let counter = 0;
  const helper = (b) => {
    let prod = 1;
    console.log(`helper called`);
    console.log(`initial value is "${b}"`);
    let arr = b.toString().split('');
    arr.forEach((e) => (prod *= +e));
    console.log(prod);
    value = prod;
    console.log(`final value value is "${value}"`);
  };

  while (value >= 10) {
    helper(value);
    counter++;
  }
  return counter;
};

const actualResult = persistence(testData);
const isEqual = actualResult === expecterResult;
console.log(`\n   ===>FINAL RESULT`, isEqual);

/* const persistence = (a) => {
  let value = a;
  let counter = 0;
  const helper = (b) => {
    let prod = 1;
    let arr = b.toString().split('');
    arr.forEach((e) => (prod *= +e));
    value = prod;
  };
  while (value >= 10) {
    helper(value);
    counter++;
  }
  return counter;
}; */
