//https://www.codewars.com/kata/5436f26c4e3d6c40e5000282/train/javascript
//Basic Sequence Practice
const sumOfN = (n) => {
  console.clear();
  console.log(`\n\n   ===> START HERE !!!!`);
  console.log(`test data: n is `, n);

  let step;
  let abs;
  let res = [0];
  let element;

  if (n < 0) {
    step = -1;
    abs = 0 - n;
    console.log(`NEGATIVE N!`, { step, abs });
  }

  if (n > 0) {
    step = 1;
    abs = n;
    console.log(`POSITIVE N!`, { step, abs });
  }

  for (let i = 0; i < abs; i++) {
    console.log(`current iteration #${i}`);
    element = res[res.length - 1] + (i + 1) * step;
    console.log(element);
    res.push(element);
    console.log(res);
  }
};

const actualResult = sumOfN(-6);
console.log(actualResult);

/* SUBMIT SOLUTION
  const sumOfN = (n) => {
  let step;
  let abs;
  let res = [0];
  let element;
  if (n < 0) {
    step = -1;
    abs = 0 - n;
  }
  if (n > 0) {
    step = 1;
    abs = n;
  }
  for (let i = 0; i < abs; i++) {
    element = res[res.length - 1] + (i + 1) * step;
    res.push(element);
  }
  return res;
}; */
