const example = '23+(65-56+36)-65-6';

const splitter = (str) => {
  let arr = [];
  let number = '';
  for (let i = 0; i < str.length; i++) {
    console.log(`\niteration. i=${i}`);

    const element = str[i];

    console.log(`number is "${element}"`);
    if (
      element === '+' ||
      element === '-' ||
      element === '*' ||
      element === '/' ||
      element === '(' ||
      element === ')'
    ) {
      console.log(`it is an operator`);
      console.log(`i ang going to push to an array number=${number}`);
      if (number.length) {
        arr.push(number);
        number = '';
      }
      console.log(
        `i ang going to push to an array elemnt=${element}`
      );
      arr.push(element);
    } else {
      console.log(`it is a number`);

      number += element;
      console.log(`number is "${number}"`);
    }
  }
  return arr;
};

console.log(splitter(example));
