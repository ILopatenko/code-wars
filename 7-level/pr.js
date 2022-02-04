//URL
//TITLE
const testArray = ['a', 'b', 'c', 'd', 'f'];
const expecterResult = 'e';
const arithmeticSequenceElements = (a, r, n) => {
  let arr = [a];
  for (let i = 1; i < n; i++) {
    arr.push(a + i * r);
  }
  return arr.join(', ');
};

const actualResult = findMissingLetter(testArray);
