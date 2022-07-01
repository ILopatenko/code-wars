const testArray = [2, 7, 11, 15];

const target = 9;

const twoSum = (arr, sum) => {
  const hash = {};

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const target = sum - current;
    console.log(`\niteration. i="${i}"`, { hash, current, target });
    console.log(`lookong for "${target}" key in hash`);
    if (!hash[target]) {
      console.log(
        `currenh hash doesnt have this key. I want to create it`
      );
      hash[current] = i + 1;
      console.log(`current hash is`, hash);
    } else {
      console.log('YES');
      return [hash[target] - 1, i];
    }
  }
};
console.log(twoSum(testArray, target));
