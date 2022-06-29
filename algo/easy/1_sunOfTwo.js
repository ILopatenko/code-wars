const testArray = [3, 5, -4, 8, 11, 1, -1, 6];
const target = 10;

const loopSol = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(`\n iteration i="${i}"`);
    const outer = arr[i];
    console.log(`outer is "${outer}"`);

    for (let j = 0; j < arr.length; j++) {
      console.log(`   iteration j="${j}"`);
      const inner = arr[j];
      console.log(`inner is "${inner}"`);

      if (inner + outer === target && j !== i) return true;
    }
  }
  return false;
};
//console.log(loopSol(testArray, target));

const hashSol = (arr, target) => {
  const hash = {};
  hash[arr[0]] = true;
  console.log(hash);

  for (let i = 1; i < arr.length; i++) {
    console.log(`current element`, arr[i]);
    if (hash[target - arr[i]]) {
      return true;
    } else {
      hash[arr[i]] = true;
      console.log(`new hash is`, hash);
    }
  }
};
const resHash = hashSol(testArray, target);
console.log(resHash);
