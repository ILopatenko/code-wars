//https://www.codewars.com/kata/array-dot-diff
//Array.diff
const testArray1 = [17, -5, 7, 1, -7, 5, 4, -6, 0, -19];
const testArray2 = [5, 7, 4, -19, 1, 0];
const expecterResult = [17, -5, -7, -6];
const array_diff = (a, b) => {
  console.clear();
  console.log(`\n\n   ===> START HERE !!!!`);
  console.log(`testArray1 is`, testArray1);
  console.log(`testArray2 is`, testArray2);

  const res = [];

  for (let i = 0; i < a.length; i++) {
    console.log(`i=${i}`);
    if (!b.includes(a[i])) {
      console.log(`   INCLUDES`);
      res.push(a[i]);
      console.log(res);
    }
  }
  return res;
};

const actualResult = array_diff(testArray1, testArray2);

console.log(expecterResult, actualResult);
