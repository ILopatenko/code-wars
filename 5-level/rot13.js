//https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript
//ROT13
const testArray = 'r5pal';
const rot13 = (a) => {
  console.clear();
  console.log(`\n\n   ===> START HERE !!!!`);
  console.log(`test data: "${a}"`);

  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let current;
  let isCurrentLower;
  let currentIndex;
  let replacement;
  let res = '';

  for (let i = 0; i < a.length; i++) {
    current = a[i];
    currentIndex = alphabet.indexOf(current.toLowerCase());
    if (currentIndex > -1) {
      isCurrentLower = current === current.toLowerCase();
      if (!isCurrentLower) {
        current = current.toLowerCase();
      }
      replacement = alphabet[(currentIndex + 13) % alphabet.length];
      if (!isCurrentLower) {
        replacement = replacement.toUpperCase();
      }
      res += replacement;
      console.log(res);
    } else {
      res += current;
    }
  }
  return res;
};

const actualResult = rot13(testArray);
console.log(actualResult === 'e5cny');

/* const testArray = 'r5pal';
const rot13 = (a) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let current;
  let isCurrentLower;
  let currentIndex;
  let replacement;
  let res = '';
  for (let i = 0; i < a.length; i++) {
    current = a[i];
    currentIndex = alphabet.indexOf(current.toLowerCase());
    if (currentIndex > -1) {
      isCurrentLower = current === current.toLowerCase();
      if (!isCurrentLower) {
        current = current.toLowerCase();
      }
      replacement = alphabet[(currentIndex + 13) % alphabet.length];
      if (!isCurrentLower) {
        replacement = replacement.toUpperCase();
      }
      res += replacement;
    } else {
      res += current;
    }
  }
  return res;
}; */
