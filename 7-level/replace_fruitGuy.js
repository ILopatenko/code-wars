//https://www.codewars.com/kata/557af4c6169ac832300000ba
//Help the Fruit Guy
const testData = ['apple', 'rottenBanana', 'apple'];
const expecterResult = ['apple', 'banana', 'apple'];

const removeRotten = (s) =>
  s ? s.map((e) => e.toLowerCase().replace(/rotten/gi, '')) : [];

let ans = removeRotten(testData);
console.log(ans);
