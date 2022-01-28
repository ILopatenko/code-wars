//https://www.codewars.com/kata/529bf0e9bdf7657179000008/train/javascript
//Sudoku Solution Validator
const testArray = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
];

const findMissingLetter = (a) => {
  console.clear();
  console.log(`\n\n   ===> START HERE !!!!`);
  console.log(`test data: `, a);
  const totalSum = 45;
  let current;
  let line = 0;
  let column = 0;
  let first = 0;
  let second;
  let third;
  for (let i = 0; i < a.length; i++) {
    console.log(`\niteration i=${i}`);
    let column = 0;
    for (let j = 0; j < a.length; j++) {
      console.log(`\niteration j=${j}`);
      current = a[i][j];
      console.log(`current is "${current}"`);
      console.log(`add current to line`);
      line += current;
      console.log(`line is `, line);

      console.log(`add current to first`);
      first += current;
      console.log(`first is `, first);

      console.log(`add current to line`);
      line += current;
    }
  }
};

const actualResult = findMissingLetter(testArray);

console.log(actualResult);
