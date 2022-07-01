const testNumber = 12345699654321;

const numberPalindromChecker = (x) => {
  const separator = (y) => {
    let digits = [];
    while (y > 0) {
      let last = y % 10;
      digits.push(last);
      y = (y - last) / 10;
    }
    return digits;
  };
  const palindromChecker = (arr) => {
    for (let i = 0; i < arr.length / 2; i++) {
      if (arr[i] !== arr[arr.length - 1 - i]) return false;
    }
    return true;
  };
  const digits = separator(x);
  return palindromChecker(digits);
};
const result = numberPalindromChecker(testNumber);
console.log(result);
