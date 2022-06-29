const testArray = [5, 1, 22, 25, 6, -1, 8, 10];
const sub = [1, 6, -1, 10];

const valSub = (arr, sub) => {
  let pointer = 0;
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    console.log(
      `new iteration. i="${i}. current elemnt is "${current}". pointer is "${pointer}" and ve looking for "${sub[pointer]}"`
    );
    if (current === sub[pointer]) {
      console.log('match');
      pointer++;
      console.log('current pointer is', pointer);
      if (pointer === sub.length) {
        console.log('YEEEESSS!');
        return true;
      }
    } else {
      console.log('next');
    }
  }
  console.log(`NOooo!`);
  return false;
};

const res = valSub(testArray, sub);
