const testData = [
  '1:0',
  '2:0',
  '3:0',
  '4:0',
  '2:1',
  '3:1',
  '4:1',
  '3:2',
  '4:2',
  '4:3',
];

const testData2 = [
  '1:0',
  '2:0',
  '3:0',
  '4:4',
  '2:2',
  '3:3',
  '1:4',
  '2:3',
  '2:4',
  '3:4',
];

const points = (a) => {
  console.clear();
  console.log(`\n\nSTART HERE!!!`);
  console.log(`test array is `, a);
  let counter = 0;
  let current;
  for (let i = 0; i < a.length; i++) {
    let x;
    let y;
    console.log(`\niteration. i=${i}`);
    current = a[i];
    x = +current[0];
    y = +current[2];
    console.log({ x, y });
    if (x > y) {
      console.log(`This is a case when x > y`);
      counter += 3;
      console.log(`new counter = ${counter}`);
    }
    if (x === y) {
      console.log(`This is a case when x and y are equal`);
      counter += 1;
      console.log(`new counter = ${counter}`);
    }
  }
  console.log(`Final result is ${counter}`);
  return counter;
};

console.log(points(testData2));
