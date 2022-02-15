//https://www.codewars.com/kata/57fe50d000d05166720000b1/train/javascript
//The Office VI - Sabbatical

const s = 'What do you mean I cant learn to code??';
const v = 8;
const h = 9;

const sabb = (s, v, h) => {
  console.log({ s, v, h });
  let current;
  let sabb = 'sabbbatical';
  let counter = 0;

  for (let i = 0; i < s.length; i++) {
    console.log(`\niteration, i=${i}`);
    current = s[i];
    console.log(`current letter is "${current}"`);
    if (sabb.includes(current)) counter++;
  }
  return counter + v + h > 22 ? 'Sabbatical! Boom!' : 'Back to your desk, boy.';
};

console.log(sabb(s, v, h));
