//https://www.codewars.com/kata/5a91a7c5fd8c061367000002
//TITLE
const testArray = ['a', 'b', 'c', 'd', 'f'];
const expecterResult = 'e';
const minimumSteps = (a, l) => {
  let sorted = a.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < sorted.length; i++) {
    sum += a[i];
    if (sum >= l) {
      return i;
    }
  }
};

const actualResult = findMissingLetter(testArray);
