const testArray = [
  { spec: 'one', time: 2.6987 },
  { spec: 'one', time: 3.5648 },
  { spec: 'two', time: 7.454 },
  { spec: 'two', time: 36.5555 },
];

const func = (arr) => {
  let ans = [];
  for (let i = 0; i < arr.length - 1; i += 2) {
    let sum = arr[i]['time'] + arr[i + 1]['time'];
    sum = +sum.toFixed(2);
    arr[i]['time'] = sum;
    ans.push(arr[i]);
  }
  return ans;
};

console.log(func(testArray));
