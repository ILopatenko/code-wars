//https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/train/javascript
//Backspaces in string
const testString = 'abj#jf';
const expecterResult = 'abjf';
const findMissingLetter = (a) => {
  console.clear();
  console.log(`\n\n   ===> START HERE !!!!`);
  console.log(`test data: "${testString}"`);
  let res = [];
  let current;
  for (let i = 0; i < a.length; i++) {
    current = a[i];
    console.log(`   current i=${i} and current symbol is "${current}"`);
    if (current === '#') {
      console.log(`current is #`);
      if (res.length === 0) {
        console.log(`empty array`);
        continue;
      } else {
        console.log(`non empty array`);
        res.pop();
        console.log(res);
      }
    } else {
      console.log(`current isn't #`);
      res.push(current);
      console.log(res);
    }
  }

  return res.join('');
};

const actualResult = findMissingLetter(testString);
if (actualResult === expecterResult) {
  console.log(`+++++++++++++++TASK WAS DONE!!!`);
} else {
  console.log(`---------------task should be done`);
}

/* //SUBMITTED
function cleanString(a) {
  let res = [];
  let current;
  for (let i = 0; i < a.length; i++) {
    current = a[i];
    if (current === '#') {
      if (res.length === 0) {
        continue;
      } else {
        res.pop();
      }
    } else {
      res.push(current);
    }
  }
  return res.join('');
}
 */
