//Given an array. Find 3 max elements and return their prod
const testArray = [
  7, 300, 30, 56, 12, 45, 69, 85, 200, 2, 3, 65, 700, 78, 1,
];
const find3Max = (arr) => {
  const swap2Elements = (array, index1, index2) => {
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
    return array;
  };
  const sortArr3 = (arr3) => {
    if (arr3[0] > arr[1]) {
      swap2Elements(arr3, 0, 1);
    }
    if (arr3[1] > arr3[2]) {
      swap2Elements(arr3, 1, 2);
      if (arr3[1] < arr3[0]) {
        swap2Elements(arr3, 0, 1);
      }
    }
    return arr3;
  };
  let first = [arr[0], arr[1], arr[2]];
  sortArr3(first);
  for (let i = 3; i < arr.length; i++) {
    if (arr[i] > first[2]) {
      swap2Elements(first, 1, 0);
      swap2Elements(first, 2, 1);
      first[2] = arr[i];
    } else if (arr[i] > first[1]) {
      swap2Elements(first, 1, 0);
      first[1] = arr[i];
    } else if (arr[i] > first[0]) {
      first[0] = arr[i];
    }
  }
  let prod = 1;
  first.forEach((e) => (prod *= e));
  return prod;
};

const result = find3Max(testArray);
console.log(result);
