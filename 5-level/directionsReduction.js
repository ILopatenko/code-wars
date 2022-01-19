//https://www.codewars.com/kata/directions-reduction/train/javascript
//Directions Reduction
const testArray = ['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST'];
const expecterResult = ['WEST'];
const reduce = (a) => {
  console.clear();
  console.log(`\n\n   ===> START HERE !!!!`);
  console.log('test data is ', testArray);

  let res = [];

  for (let i = 0; i < a.length; i++) {
    console.log(`\nnew iteration. i=${i}`);
    console.log('   res =', res);
    console.log(`   a[i] = ${a[i]}`);
    console.log('   checking res length');
    if (res.length === 0) {
      console.log('      res length===0');
      console.log('      Push current element to res');
      res.push(a[i]);
      console.log('      new res is', res);
      console.log('      continue');
      continue;
    } else {
      console.log('      res length!==0');
      console.log(
        '      check if last element of res and current element are opposite directions'
      );
      if (
        (a[i] === 'NORTH' && res[res.length - 1] !== 'SOUTH') ||
        (a[i] === 'SOUTH' && res[res.length - 1] !== 'NORTH') ||
        (a[i] === 'EAST' && res[res.length - 1] !== 'WEST') ||
        (a[i] === 'WEST' && res[res.length - 1] !== 'EAST')
      ) {
        console.log(`      elements aren't opposite directions`);
        console.log('      Push current element to res');
        res.push(a[i]);
        console.log('      New res is', res);
      } else {
        console.log(`      elements ARE OPPOSITE DIRECTIONS!`);
        console.log('      delete last element from res');
        res.pop();
        console.log('      new res is', res);
      }
    }
  }

  return res;
};

const actualResult = reduce(testArray);

/* const dirReduc = (a) => {
  let res = [];
  for (let i = 0; i < a.length; i++) {
    if (res.length === 0) {
      res.push(a[i]);
      continue;
    } else {
      if (
        (a[i] === 'NORTH' && res[res.length - 1] !== 'SOUTH') ||
        (a[i] === 'SOUTH' && res[res.length - 1] !== 'NORTH') ||
        (a[i] === 'EAST' && res[res.length - 1] !== 'WEST') ||
        (a[i] === 'WEST' && res[res.length - 1] !== 'EAST')
      ) {
        res.push(a[i]);
      } else {
        res.pop();
      }
    }
  }
  return res;
}; */
