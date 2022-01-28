//https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript
//The Hashtag Generator
const testString = 'Do We have A Hashtag';
const expecterResult = '#DoWeHaveAHashtag';
const generateHashtag = (s) => {
  console.clear();
  console.log(`\n\n   ===> START HERE !!!!`);
  console.log(`test string: "${s}"`);
  let res = '#';
  let current;
  let prev;

  for (let i = 0; i < s.length; i++) {
    console.log(`\niteration. i="${i}"`);
    current = s[i];
    console.log(`current = "${current}"`);
    prev = s[i - 1];
    console.log(`prev = "${prev}"`);

    //
    if (current !== ' ') {
      console.log(`not a space`);

      if (prev === ' ') {
        console.log(`first after a space`);
        current = current.toUpperCase();
        console.log(`upper current`, current);
        res += current;
        console.log(`res is `, res);
      } else {
        res += current;
        console.log(`res is `, res);
      }
    }
  }

  return res;
};

const actualResult = generateHashtag(testString);
console.log(`FINAL:`, actualResult);

/* const generateHashtagSlow = (s) => {
  console.clear();
  console.log(`\n\n   ===> START HERE !!!!`);
  console.log(`test string: "${s}"`);
  const trim = s.trim();
  console.log(`trim is "${trim}"`);
  console.log(`map for Upper case`);
  const upper = trim.map((el) => {});
};

const actualResult = generateHashtagSlow(testString); */

/* //FINAL SUBMIT
const generateHashtag = (s) => {
  let res = '#';
  let current;
  let prev;
  for (let i = 0; i < s.length; i++) {
    current = s[i];
    prev = s[i - 1];
    if (current !== ' ') {
      if (prev === ' ' || prev === undefined) {
        current = current.toUpperCase();
        res += current;
      } else {
        res += current;
      }
    }
  }
  if (res.length === 1 || res.length > 140) {
    return false;
  }
  return res;
};
 */
