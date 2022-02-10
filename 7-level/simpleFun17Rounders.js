//https://www.codewars.com/kata/58846d50f54f021d90000012/train/javascript
//Simple Fun #17: Rounders
const testData = 1234;
const rounders = (a) => {
  console.clear();
  console.log(`\n\n   ===> START HERE !!!!`);
  console.log(`test data input: "${a}"`);
  let arr = a.toString().split('');
  console.log(`arr is `, arr);
  let current;
  let ans = [];

  for (let i = arr.length - 1; i > 0; i--) {
    console.log(`\niteration. i=${i}`);
    current = +arr[i];
    console.log(`current =`, current);

    if (current < 5) {
      console.log(`current less than 5`);
      console.log(`unshift 0 to ans`);
      ans.unshift(0);
      console.log(`current ans is`, ans);
    } else {
      console.log(`current equal or more than 5`);
      console.log(`unshift 0 to ans and change next element in a`);
      ans.unshift(0);
      console.log(`current ans is`, ans);
      arr[i - 1] = +arr[i - 1] + 1;
      console.log(`new arr is`, arr);
    }
  }
  ans.unshift(+arr[0]);
  console.log(ans);
  return +ans.join('');
};

const actualResult = rounders(testData);

console.log(`\n   ===>FINAL RESULT`, actualResult);

/* const rounders = (a) => {
  let arr = a.toString().split('');
  let current;
  let ans = [];
  for (let i = arr.length - 1; i > 0; i--) {
    current = +arr[i];
    if (current < 5) {
      ans.unshift(0);
    } else {
      ans.unshift(0);
      arr[i - 1] = +arr[i - 1] + 1;
    }
  }
  ans.unshift(+arr[0]);
  return +ans.join('');
}; */
