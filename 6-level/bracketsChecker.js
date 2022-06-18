//URL
//TITLE
const testData = '()))';
const expecterResult = false;
const justFunction = (s) => {
  if (s[0] === '}' || s[0] === ')' || s[0] === ']') return false;
  console.clear();
  console.log(`\n\n   ===> START HERE !!!!`);
  console.log(`test data input: "${s}"`);
  console.log(`expected result: "${expecterResult}"`);
  let current;
  let stack = [s[0]];
  for (let i = 1; i < s.length; i++) {
    console.log(`\niteration. i=${i}`);
    current = s[i];
    console.log(`current = "${current}" last in stack is "${stack.at(-1)}"`);
    //
    //
    if (
      (stack.at(-1) === '{' && s[i] === '}') ||
      (stack.at(-1) === '(' && s[i] === ')') ||
      (stack.at(-1) === '[' && s[i] === ']')
    ) {
      console.log('PAIR!!!!');
      stack.pop();
      console.log(`new stack is `, stack);
    } else {
      console.log('WRONG');
      stack.push(s[i]);
      console.log(`new stack is `, stack);
    }
  }
  return stack.length > 0 ? false : true;
};

const actualResult = justFunction(testData);
console.log(actualResult);
