//URL
//TITLE
const testData = ['a', 'b', 'c', 'd', 'f'];
const expecterResult = 'e';
const findMissingLetter = (a) => {
  console.clear();
  console.log(`\n\n   ===> START HERE !!!!`);
  console.log(`test data input: "${a}"`);
  console.log(`expected result: "${expecterResult}"`);
  let current;

  for (let i = 0; i < a.length; i++) {
    console.log(`\niteration. i=${i}`);
    current = a[i];
    console.log(`current = "${current}"`);
  }
};

const actualResult = findMissingLetter(testData);
const isEqual = actualResult === expecterResult;
console.log(`\n   ===>FINAL RESULT`, isEqual);
