//https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript
//Replace With Alphabet Position
let input = '>yw,d!6@';

let expectedResult = '25 23 4';

const alphabetPosition = (s) => {
  let al = 'abcdefghijklmnopqrstuvwxyz';
  console.clear();
  console.log(`\n\n   =======> START HERE!!!!`);
  console.log(`test string is "${s}"`);
  console.log(`input length is ${s.length}`);
  let res = [];
  for (let i = 0; i < s.length; i++) {
    console.log(`\ncurrent i=${i}`);
    let symbol = s[i].toLowerCase();
    console.log(`curent symbol is "${symbol}"`);
    let alphabetIndex = al.indexOf(symbol);
    console.log(alphabetIndex);
    if (alphabetIndex > -1) {
      console.log(`it is a letter`);
      res.push(alphabetIndex + 1);
      console.log(`new res is "${res}"`);
    }
  }
  return res.join(' ');
};

let AAactualResult = alphabetPosition(input);

console.log({ expectedResult, AAactualResult });
