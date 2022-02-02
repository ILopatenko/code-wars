//codewars.com/kata/517abf86da9663f1d2000003/train/javascript
//Convert string to camel case
const testData = 'The-Stealth-Warrior';
const expecterResult = 'TheStealthWarrior';
const toCamelCase = (a) => {
  if (a.length === 0) return '';
  console.clear();
  console.log(`\n\n   ===> START HERE !!!!`);
  console.log(`test data input: "${a}"`);
  console.log(`expected result: "${expecterResult}"`);
  let current;
  let res = '';

  for (let i = 0; i < a.length; i++) {
    console.log(`\niteration. i=${i}`);
    current = a[i];
    console.log(`current = "${current}"`);

    if (current !== '-' && current !== '_') {
      console.log(`current not a - or _`);
      if (res.length === 0) {
        console.log(`current is going to be a first letter`);
        res += current;
        console.log(`new res is "${res}"`);
      } else {
        console.log(`a lerrer from the middle of the string`);
        console.log(`check if previous symbol was "-" or "_"`);
        if (i >= 1 && (a[i - 1] === '-' || a[i - 1] === '_')) {
          console.log(`this letter is first after "-" or "_"`);
          console.log(`add it to res with Upper case`);
          res += current.toUpperCase();
          continue;
        }
        res += current;
        console.log(`new res is "${res}"`);
      }
    } else {
      console.log(`current is "_" or "-"`);
    }
  }
  return res;
};

const actualResult = toCamelCase(testData);
const isEqual = actualResult === expecterResult;
console.log(`\n   ===>FINAL RESULT`, isEqual);

/* const toCamelCase = (a) => {
  if (a.length === 0) return '';
  let current;
  let res = '';
  for (let i = 0; i < a.length; i++) {
    current = a[i];
    if (current !== '-' && current !== '_') {
      if (res.length === 0) {
        res += current;
      } else {
        if (i >= 1 && (a[i - 1] === '-' || a[i - 1] === '_')) {
          res += current.toUpperCase();
          continue;
        }
        res += current;
      }
    }
  }
  return res;
}; */
