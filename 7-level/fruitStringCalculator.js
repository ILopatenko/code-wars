//https://www.codewars.com/kata/57b9fc5b8f5813384a000aa3/train/javascript

let testData = 'Jerry has 34 apples and gains 6';
const calculate = (s) => {
  console.log(testData);
  let arr = s.split(' ');
  console.log(arr);
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toUpperCase() === arr[i].toLowerCase()) {
      res.push(+arr[i]);
    }
    if (arr[i] === 'loses') res.push('-');
    if (arr[i] === 'gains') res.push('+');
  }
  console.log(res);
  return res[1] === '+' ? res[0] + res[2] : res[0] - res[2];
};

const ans = calculate(testData);
console.log(ans);
