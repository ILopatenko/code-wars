//https://www.codewars.com/kata/5552101f47fc5178b1000050/train/javascript
//Playing with digits
const a = 89;
const b = 1;

const digPow = (a, b) => {
  const str = a.toString();
  let current;
  let sum = 0;
  console.clear();
  console.log(`\n\n   ===> START HERE !!!!`);
  console.log(`test data:`, { a, b });
  console.log(`string is "${str}"`);

  for (let i = 0; i < str.length; i++) {
    console.log(`\niteration. i=${i}`);
    current = +str[i];
    console.log(`current =`, current);
    sum += current ** (b + i);
    console.log(`new prod =`, sum);
  }
  return (sum / a) % 1 === 0 ? sum / a : -1;
};

const actualResult = digPow(a, b);
console.log(actualResult);
