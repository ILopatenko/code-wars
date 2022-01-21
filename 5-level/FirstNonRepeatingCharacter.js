//https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript
//First non-repeating character
const testString = 'sTreSS';

const firstNonRepeatingLetter = (s) => {
  const lower = s.toLowerCase();
  let current;
  console.clear();
  console.log(`\n\n   ===> START HERE !!!!`);
  console.log(`test string: "${s}"`);

  if (s.length === 1) {
    return s;
  }

  for (let i = 0; i < s.length; i++) {
    console.log(`\niteration. i=${i}`);
    current = s[i];
    console.log(`   current = "${current}"`);
    if (
      lower.indexOf(current.toLowerCase()) ===
      lower.lastIndexOf(current.toLowerCase())
    ) {
      return current;
    }
  }
  return '';
};

const actualResult = firstNonRepeatingLetter(testString);
console.log(actualResult);

/* const firstNonRepeatingLetter = (s) => {
  const lower = s.toLowerCase();
  let current;
  if (s.length === 1) {
    return s;
  }
  for (let i = 0; i < s.length; i++) {
    current = s[i];
    if (
      lower.indexOf(current.toLowerCase()) ===
      lower.lastIndexOf(current.toLowerCase())
    ) {
      return current;
    }
  }
  return '';
}; */
