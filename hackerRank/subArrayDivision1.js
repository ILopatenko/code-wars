const testArray = [1, 2, 1, 3, 2];
const birthday = (s, d, m) => {
  console.log(`start data is`, { s, d, m });

  ///
  let current;
  let sum = 0;
  let count = 0;
  let des = 0;
  for (let i = 0; i < s.length; i++) {
    console.log(`\n new iteration`);
    current = s[i];
    console.log({ current, sum, count, des });

    //
    //
    sum += current;
    count++;
    if (count === m) {
      console.log(
        `count=${count} and m=${m} - it is time to check summ`
      );
      if (sum === d) {
        console.log(`sum=${sum} and d=${d} - BINGO`);
        des++;
      } else {
        console.log(`sum=${sum} and d=${d} - NOPE`);
      }
      count--;
      sum -= s[i - m + 1];
      console.log({ current, sum, count, des });
    } else {
      console.log(`one more!`);
    }
  }
  return des;
};

const ans = birthday(testArray, 3, 2);
console.log('final ans is ', ans);
