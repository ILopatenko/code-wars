//https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript
//Unique In Order
const testString = 'AAAABBBCCDAABBB';
const uniqueInOrder = (s) => {
  console.clear();
  console.log(`\n\n   ===> START HERE !!!!`);
  console.log(`test string: "${s}"`);
  const res = [s[0]];
  let current;

  for (let i = 1; i < s.length; i++) {
    console.log(`\niteration. i=${i}`);
    current = s[i];
    console.log(`current="${current}"`);
    console.log(`last in res is "${res[res.length - 1]}"`);
    console.log(`I want to check if current===last in res`);
    if (current === res[res.length - 1]) {
      console.log(`EQUAL`);
    } else {
      console.log(`NOT EQUAL`);
      console.log(`push current to res`);
      res.push(s[i]);
      console.log(`new res is`, res);
    }
  }
  return res;
};

const actualResult = uniqueInOrder(testString);
console.log(actualResult);

/* const uniqueInOrder = (s) => {
  const res = [s[0]];
  let current;
  for (let i = 1; i < s.length; i++) {
    current = s[i];
    if (current !== res[res.length - 1]) res.push(s[i]);
  }
  return res;
}; */
