//https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript
const testArray = [
  39, 33, 28, -23, 20, 14, 18, -47, -1, -11, 1, -2, 36, 20, 36, -12, -12, 41,
  -17, 22, -34, -16, 19, 37, -38, 36, 2, 0,
];

const testArray2 = [
  46, 32, 3, 10, -33, -3, 0, 47, -1, 1, 37, -22, -10, -32, -4, -48, 23, -12,
  -20, -1, 41, -16, 5, 41, -19, 5, -24, -31, 8, -27, -44, 30, 46, 43, -30, -6,
  17, 41, 15, 15, 28, -14, -2, -11,
];
const expectedResult = 189;
const maxSubSum = (arr) => {
  console.log(`\n\n\n ===> START HERE!`);
  console.log(`test array is `, arr);
  let maxSum = null;
  for (let i = 0; i < arr.length; i++) {
    console.log(`\n new iteration i=${i}`);
    console.log(`current element is`, arr[i]);
    if (maxSum === null) {
      console.log(`maxSum === null`);
      if (arr[i] <= 0) {
        console.log(`current element <=0 and cant start max subArraySum`);
        continue;
      } else {
        console.log(`current element > 0 and can start max subArraySum`);
        maxSum += arr[i];
        console.log(`new maxSum is`, maxSum);
      }
    } else {
      console.log(`maxSum !== null`);
      if (arr[i] >= 0) {
        console.log(`current is bigger or equal to zero`);
      }
    }
  }
};

const maxSubSum2 = (arr) => {
  console.log(`\n\n\n ===> START HERE!`);
  console.log(`test array is `, arr);
  let ans = [];
  let pos;
  let neg;
  let max;
  let maxAfterNegative;
  for (let i = 0; i < arr.length; i++) {
    console.log(`\n new iteration i=${i}`);
    console.log(`current element is`, arr[i]);
    if (arr[i] >= 0) {
      console.log(`current element is bigger or equal to zero`);
      if (!pos) {
        console.log(`pos was undefined`);
        pos = arr[i];
        console.log(`new pos sum is `, pos);
        if (neg) {
          console.log(`neg exists`);
          ans.push(neg);
          console.log(`new ans is`, ans);
          neg = undefined;
          console.log(`neg is `, neg);
        }
      } else {
        pos += arr[i];
        console.log(`new pos sum is `, pos);
      }
    } else {
      console.log(`current element is less than zero`);
      if (!neg) {
        console.log(`neg was undefined`);
        neg = arr[i];
        console.log(`new neg sum is `, neg);
        ans.push(pos);
        console.log(`new ans is`, ans);
        pos = undefined;
        console.log(`pos is `, pos);
      } else {
        neg += arr[i];
        console.log(`new neg sum is `, neg);
      }
    }
    if (i === arr.length - 1) {
      pos ? ans.push(pos) : ans.push(neg);
      pos = undefined;
      neg = undefined;
    }
    console.log(`final ans is`, ans);
  }
  for (let i = 0; i < ans.length; i++) {
    console.log(`\niteration. current i=${i}`);
    console.log(`current element is`, ans[i]);
    if (!max) {
      console.log('max was undefined');
      if (ans[i] > 0) {
        console.log(`current is bigger than zero`);
        max = ans[i];
        console.log('new max is', max);
      } else {
        console.log(`current is negative - next`);
      }
    } else {
      console.log('max exists');
      if (ans[i] > 0) {
        console.log(
          'current is bigger than zero and max exists - this is a positive after negative'
        );
        maxAfterNegative += ans[i];
        console.log('new maxAfterNegative is', maxAfterNegative);
        if (maxAfterNegative > max) {
          console.log(`sum after negative is bigger than last max`);
          max = maxAfterNegative;
          console.log(`new max is`, max);
        }
      } else {
        console.log('current is less than zero');
        maxAfterNegative = max + ans[i];
        console.log(`new maxAfterNegative is`, maxAfterNegative);
      }
    }
  }
};
maxSubSum2(testArray2);
