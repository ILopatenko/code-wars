//https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript
//Find the missing letter
const testArray = ['n', 'o', 'p', 'q', 's', 't', 'u'];
const expecterResult = 'e';
const findMissingLetter = (a) => {
  let alphabetLowerCase = 'abcdefghijklmnopqrstuvwxyz';
  let alphabet;
  if (a[0] === a[0].toLowerCase()) {
    alphabet = alphabetLowerCase;
  } else {
    alphabet = alphabetLowerCase.toUpperCase();
  }
  let current;
  let next;
  let currentIndexAlphabet;
  let nextIndexAlphabet;
  for (let i = 0; i < a.length - 1; i++) {
    current = a[i];
    console.log(`current ${current}`);
    next = a[i + 1];
    console.log(`next ${next}`);

    currentIndexAlphabet = alphabet.indexOf(current);
    console.log(`currentIndexAlphabet ${currentIndexAlphabet}`);
    nextIndexAlphabet = alphabet.indexOf(next);
    console.log(`nextIndexAlphabet ${nextIndexAlphabet}`);
    if (nextIndexAlphabet - currentIndexAlphabet > 1) {
      return alphabet[currentIndexAlphabet + 1];
    }
  }
};

const actualResult = findMissingLetter(testArray);
console.log(actualResult);
