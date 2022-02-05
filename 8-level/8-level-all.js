//#1 https://www.codewars.com/kata/5f0ed36164f2bc00283aed07/train/javascript

const overTheRoad = (h, l) => {
  let odd = [];
  let even = [];
  for (let i = 1; i <= 2 * l; i++) {
    i % 2 === 0 ? even.push(l * 2 + 2 - i) : odd.push(i);
  }
  h % 2 === 0 ? odd[even.indexOf(h)] : even[odd.indexOf(h)];
};

overTheRoad(5, 12);

//https://www.codewars.com/kata/57216d4bcdd71175d6000560/train/javascript
const padIt = (str, n) => {
  do {
    n % 2 === 0 ? (str += '*') : (str = '*' + str);
    n--;
  } while (n > 0);
  return str;
};

//https://www.codewars.com/kata/5a58d46cfd56cb4e8600009d/train/javascript
const halvingSum = (x) => {
  let sum = x;
  do {
    x /= 2;
    sum += Math.floor(x);
  } while (x > 2);
  return sum;
};

//https://www.codewars.com/kata/5733f948d780e27df6000e33/train/javascript
const cutCube = (v, n) => {
  console.clear();
  console.log(`===> START HERE! <===`);
  console.log(`Initial values: v=${v}, n=${n}`);
  console.log(`v/n=${v / n}`);
  console.log(`Math.cbrt(v/n)=${Math.cbrt(v / n)}`);
  console.log(`Math.cbrt(v/n)%1===0 (${Math.cbrt(v / n) % 1 === 0})`);
  return Math.cbrt(v / n) % 1 === 0;
};
console.log(cutCube(50000, 50));

//https://www.codewars.com/kata/54598d1fcbae2ae05200112c
const all=(a,f)=>a.every(f)
