//https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript
//Moving Zeros To The End
const testArray = [1, 2, 0, 1, 0, 1, 0, 3, 0, 1];
const expecterResult = [1, 2, 1, 1, 3, 1, 0, 0, 0, 0];
const findMissingLetter = (a) => {
  console.clear();
  console.log(`\n\n\n   ===> START HERE !!!!`);
  console.log(`test array:`, a);
  let element;
  let res = [];
  let temp = [];

  for (let i = 0; i < a.length; i++) {
    console.log(`\niteration. i="${i}"`);
    element = a[i];
    console.log(`current element=${element}`);
    console.log(`is element 0?`);
    if (element === 0) {
      console.log(`YES! element is 0!`);
      console.log(`push element to temp`);
      temp.push(element);
      console.log(`new temp is`, temp);
      console.log(`info res is`, res);
    } else {
      console.log(`NO! element isn't 0!`);
      console.log(`push element to res`);
      res.push(element);
      console.log(`new res is`, res);
      console.log(`info temp is`, temp);
    }
  }

  console.log(res.concat(temp));
  return res.concat(temp);
};

const actualResult = findMissingLetter(testArray);

/* 
var moveZeros = function (a) {
  let element;
  let res = [];
  let temp = [];
  for (let i = 0; i < a.length; i++) {
    element = a[i];
    if (element === 0) {
      temp.push(element);
    } else {
      res.push(element);
    }
  }
  return res.concat(temp)
} 
 */
