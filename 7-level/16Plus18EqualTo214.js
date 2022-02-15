//https://www.codewars.com/kata/5effa412233ac3002a9e471d/train/javascript
//16+18=214
const a = 1222;
const b = 30277;

const expecterResult = 31499;
const add = (a, b) => {
  let arrA = a.toString().split('');
  let arrB = b.toString().split('');
  let res = [];
  console.log({ arrA, arrB });
  let maxLength = arrA.length >= arrB.length ? arrA.length : arrB.length;
  console.log(`MAX length`, maxLength);

  while (arrA.length < maxLength) {
    arrA.unshift('0');
  }
  while (arrB.length < maxLength) {
    arrB.unshift('0');
  }
  console.log(`after normalizing`, { arrA, arrB });
  for (let i = maxLength - 1; i >= 0; i--) {
    res.unshift(+arrA[i] + +arrB[i]);
    console.log(`new result is`, res);
  }
  console.log(res.join(''));
  return +res.join('');
};
let ans = add(a, b);
console.log(ans === expecterResult);
