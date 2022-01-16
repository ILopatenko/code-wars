//https://www.codewars.com/kata/58039f8efca342e4f0000023/train/javascript
//Change it up
const testString = '123 drg & avsef;jl';
const expecterResult = 'e';
const findMissingLetter = (a) => {
  console.clear();
  console.log(`\n\n   ===> START HERE !!!!`);
  console.log(`test data: "${a}"`);
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let current;
  let currentIndex;
  let res = [];

  let ans;
  let next;
  for (let i = 0; i < a.length; i++) {
    console.log(`   i=${i}`);
    current = a[i];
    console.log(`current = "${current}"`);
    if (a[i] === ' ') {
      console.log(`space!`);

      res.push(' ');
      continue;
    }
    currentIndex = alphabet.indexOf(a[i].toLowerCase());
    if (currentIndex === -1) {
      console.log(`symbol or number`);
      if (typeof +a[i] === 'number') {
        console.log('number');
        res.push(a[i]);
        console.log(res);
      }
    }
    console.log(`currentIndex=${currentIndex}`);
    if (currentIndex === alphabet.length - 1) {
      next = alphabet[0];
      console.log(`next=${next}`);
    }
    //if index is a letter
    else next = alphabet[currentIndex + 1];
    console.log(`next=${next}`);

    if (
      next === 'a' ||
      next === 'e' ||
      next === 'i' ||
      next === 'o' ||
      next === 'u' ||
      next === 'e'
    ) {
      console.log('vovel');
      next = next.toUpperCase();
    } else {
      next = next.toLowerCase();
    }
    res.push(next);
  }

  //console.log(`f: ${res}`);
  return res.join('');
};

const actualResult = findMissingLetter(testString);

console.log(actualResult);
