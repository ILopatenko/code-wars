const array = [2, 1, 2, 2, 2, 3, 4, 2];
const target = 2;

const moveTo = (arr, target) => {
  let pointer = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    console.log(`\n iteration`);
    let current = arr[i];
    console.log({ i, arr, pointer, current });

    if (current === target) {
      console.log('current === target');
      console.log(
        `I have to compare arr[${pointer}]=${arr[pointer]} and target=${target}`
      );
      while (arr[pointer] === target) {
        console.log('they are equal - pointer moves to left');
        pointer--;
        if (pointer <= i) return arr;
        console.log('pointer--', pointer);
      }
      console.log(
        `I need to swap current = ${current} and arr[${pointer}]= ${arr[pointer]}`
      );
      arr[i] = arr[pointer];

      arr[pointer] = target;
      pointer--;
      if (pointer <= i) return arr;

      console.log(`new arr is ${arr}, pointer is ${pointer}`);
    }
  }
};

console.log(moveTo(array, target));
