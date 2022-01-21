//https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1
//Snail
const testArray = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];
const findMissingLetter = (a) => {
  console.clear();
  console.log(`\n\n   ===> START HERE !!!!`);
  console.log('test data:', testArray);
  let res = [];

  for (let i = 0; i < a.length / 2 + 1; i++) {
    console.log(`\niteration. i=${i}`);
    console.log('\nhorizontal left-to-right');
    for (let j = 0 + i; j < a.length - i; j++) {
      console.log(`   \niteration. j=${j}`);
      console.log(`   current="${a[i][j]}"`);
      console.log(`push current to res`);
      res.push(a[i][j]);
      console.log('new res is ', res);
      if (res.length === a.length ** 2) {
        return res;
      }
    }
    console.log('\nvertical top-to-bottom');
    for (let j = 1 + i; j < a.length - i; j++) {
      console.log(`   \niteration. j=${j}`);
      console.log(`   current="${a[j][a.length - 1 - i]}"`);
      console.log(`push current to res`);
      res.push(a[j][a.length - 1 - i]);
      console.log('new res is ', res);
      if (res.length === a.length ** 2) {
        return res;
      }
    }
    console.log('\nhorizontal right-to-left');
    for (let j = a.length - 2 - i; j >= 0 + i; j--) {
      console.log(`   \niteration. j=${j}`);
      console.log(`   current="${a[a.length - 1 - i][j]}"`);
      console.log(`push current to res`);
      res.push(a[a.length - 1 - i][j]);
      console.log('new res is ', res);
      if (res.length === a.length ** 2) {
        return res;
      }
    }
    console.log('\nvertical bottom-to-top');
    for (let j = a.length - 2 - i; j > i; j--) {
      console.log(`   \niteration. j=${j}`);
      console.log(`   current="${a[j][i]}"`);
      console.log(`push current to res`);
      res.push(a[j][i]);
      console.log('new res is ', res);
      if (res.length === a.length ** 2) {
        return res;
      }
    }
  }
};

const actualResult = findMissingLetter(testArray);
console.log(actualResult);

/* const snail = (a) => {
  if (a.length === 1) {
    if (a[0].length === 0) {
      return [];
    } else {
      return a[0];
    }
  }
  let res = [];
  for (let i = 0; i < a.length / 2 + 1; i++) {
    for (let j = 0 + i; j < a.length - i; j++) {
      res.push(a[i][j]);
      if (res.length === a.length ** 2) {
        return res;
      }
    }
    for (let j = 1 + i; j < a.length - i; j++) {
      res.push(a[j][a.length - 1 - i]);

      if (res.length === a.length ** 2) {
        return res;
      }
    }
    for (let j = a.length - 2 - i; j >= 0 + i; j--) {
      res.push(a[a.length - 1 - i][j]);
      if (res.length === a.length ** 2) {
        return res;
      }
    }
    for (let j = a.length - 2 - i; j > i; j--) {
      res.push(a[j][i]);
      if (res.length === a.length ** 2) {
        return res;
      }
    }
  }
};
 */
