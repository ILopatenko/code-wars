//https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript
//Highest Scoring Word
///const testArray = 'what time are we climbing up the volcano';
const testArray = 'welghycgwrdae ktnnxbnxbbhfy owgoahltgqqwq xnzbcbrmpgmcz ';
const expecterResult = 'need';
const high = (string) => {
  const s = string.trim() + ' ';
  console.clear();
  console.log('\n\n\n===> START HERE!!!!');
  console.log(`Test string is "${s}"`);
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let element;
  let elementScore = 0;
  let word = '';
  let wordScore = 0;
  let maxWord = '';
  let maxWordScore = 0;
  for (let i = 0; i < s.length; i++) {
    console.log(`\vNEW ITERATION. i=${i}`);
    console.log(` 1 Separate current element`);
    const element = s[i];
    console.log(`  current element = "${element}"`);
    console.log(` 2 Check if current element isn't " " or last element`);
    if (element === ' ') {
      console.log('SPACE');
      console.log(`current word is "${word}"`);
      console.log(`current wordScore is "${wordScore}"`);
      //
      console.log(`check if current wordScore > maxWordScore`);
      if (wordScore > maxWordScore) {
        console.log(`current wordScore > maxWordScore`);
        console.log(`change maxWordScore to wordScore`);
        maxWordScore = wordScore;
        console.log(`new maxWordScore is "${maxWordScore}"`);
        console.log(`change maxWord to word`);
        maxWord = word;
        console.log(`new maxWord is "${maxWord}"`);
        console.log(`Drop wordScore and word`);
        wordScore = 0;
        word = '';
        console.log({ word, wordScore, maxWord, maxWordScore });
      } else {
        console.log(`current wordScore < maxWordScore`);
        console.log(`Drop wordScore and word`);
        wordScore = 0;
        word = '';
        console.log({ word, wordScore, maxWord, maxWordScore });
      }
    } else {
      console.log('LETTER');
      console.log(`add current element to word`);
      word += element;
      console.log(`new value of word is "${word}"`);
      console.log(`find score of element`);
      elementScore = alphabet.indexOf(element) + 1;
      console.log(`element score is "${elementScore}"`);
      console.log(`add current elementScore to wordScore`);
      wordScore += elementScore;
      console.log(`new value of wordScore is "${wordScore}"`);
    }
  }
  return maxWord;
};
const actualResult = high(testArray);
console.log(actualResult);

/* const high = (string) => {
  const s = string.trim() + ' ';
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let element;
  let elementScore = 0;
  let word = '';
  let wordScore = 0;
  let maxWord = '';
  let maxWordScore = 0;
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (element === ' ') {
      if (wordScore > maxWordScore) {
        maxWordScore = wordScore;
        maxWord = word;
        wordScore = 0;
        word = '';
      } else {
        wordScore = 0;
        word = '';
      }
    } else {
      word += element;
      elementScore = alphabet.indexOf(element) + 1;
      wordScore += elementScore;
    }
  }
  return maxWord;
};
 */
