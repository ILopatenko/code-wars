const testArray = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];
const testArray2 = [3, 1, 2, 5, 6, 3, 7, 9, 34, 1, 2, 3, 4, 13, 38];
const threeLargest = (arr) => {
  const max = [arr[0], arr[1], arr[2]].sort((a, b) => a - b);
  console.log(max);
  const helper = (arr, el) => {
    if (el > arr[2]) {
      console.log(`current the biggest`);
      arr.push(el);
      arr.shift();
      console.log(arr);
    } else if (el > arr[1]) {
      console.log(`current is bigger`);

      arr[0] = arr[1];
      arr[1] = el;
      console.log(arr);
    } else if (el > arr[0]) {
      console.log(`current is big`);
      arr[0] = el;
      console.log(arr);
    }
  };
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    console.log({ i, current, max });
    helper(max, current);
  }
  console.log({ max });
};

threeLargest(testArray2);
