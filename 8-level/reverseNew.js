const testData = 'hello my beautiful word';
const test2 = "yoda doesn't speak like this";

const reverse = (s) => {
  let word = '';
  let res = '';
  let current = '';
  for (let i = 0; i < s.length; i++) {
    console.log(`\niteration i=${i}`);
    current = s[i];
    console.log(`current is ${current}`);

    if (current !== ' ') {
      console.log('not a space');
      word += current;
      console.log('new word = ', word);
    } else {
      console.log('SPACE');

      res = ' ' + word + res;
      console.log('new res is', res);
      word = '';
      console.log('word is dropped');
    }
  }
  res = word + res;
  console.log(res);
};

reverse(test2);
