//https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript
//Human Readable Time
let test = 3600;
const expecterResult = '12:34:56';
const humanReadable = (a) => {
  console.clear();
  console.log(`\n\n   ===> START HERE !!!!`);
  console.log(`test data: "${a}"`);
  let s = a % 60;
  let sStr = s < 10 ? '0' + s : s;

  let m = ((a % 3600) - s) / 60;
  let mStr = m < 10 ? '0' + m : m;

  let h = (a - m * 60 - s) / 3600;
  let hStr = h < 10 ? '0' + h : h;
  return `${hStr}:${mStr}:${sStr}`;
};

const actualResult = humanReadable(test);
console.log(actualResult);

/* const humanReadable = (a) => {
  let s = a % 60;
  let sStr = s < 10 ? '0' + s : s;
  let m = ((a % 3600) - s) / 60;
  let mStr = m < 10 ? '0' + m : m;
  let h = (a - m * 60 - s) / 3600;
  let hStr = h < 10 ? '0' + h : h;
  return `${hStr}:${mStr}:${sStr}`;
}; */
