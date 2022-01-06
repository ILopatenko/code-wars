//https://www.codewars.com/kata/602afedfd4a64d0008eb4e6e/train/javascript
const getDay = (a, b) => {
  let leap = b ? 1 : 0;
  if (a <= 31) {
    return `January, ${a}`;
  }
  if (a > 31 && a <= 31 + 28 + leap) {
    return `February, ${a - 31}`;
  }
  if (a > 31 + 28 + leap && a <= 31 + 28 + 31 + leap) {
    return `March, ${a - 31 - 28 - leap}`;
  }
  if (a > 31 + 28 + 31 + leap && a <= 31 + 28 + 31 + 30 + leap) {
    return `April, ${a - 31 - 28 - 31 - leap}`;
  }
  if (a > 31 + 28 + 31 + 30 + leap && a <= 31 + 28 + 31 + 30 + 31 + leap) {
    return `May, ${a - 31 - 28 - 31 - 30 - leap}`;
  }
  if (
    a > 31 + 28 + 31 + 30 + 31 + leap &&
    a <= 31 + 28 + 31 + 30 + 31 + 30 + leap
  ) {
    return `June, ${a - 31 - 28 - 31 - 30 - 31 - leap}`;
  }
  if (
    a > 31 + 28 + 31 + 30 + 31 + 30 + leap &&
    a <= 31 + 28 + 31 + 30 + 31 + 30 + 31 + leap
  ) {
    return `July, ${a - 31 - 28 - 31 - 30 - 31 - 30 - leap}`;
  }
  if (
    a > 31 + 28 + 31 + 30 + 31 + 30 + 31 + leap &&
    a <= 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + leap
  ) {
    return `August, ${a - 31 - 28 - 31 - 30 - 31 - 30 - 31 - leap}`;
  }
  if (
    a > 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + leap &&
    a <= 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + leap
  ) {
    return `September, ${a - 31 - 28 - 31 - 30 - 31 - 30 - 31 - 31 - leap}`;
  }
  if (
    a > 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + leap &&
    a <= 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + leap
  ) {
    return `October, ${a - 31 - 28 - 31 - 30 - 31 - 30 - 31 - 31 - 30 - leap}`;
  }
  if (
    a > 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + leap &&
    a <= 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + leap
  ) {
    return `November, ${
      a - 31 - 28 - 31 - 30 - 31 - 30 - 31 - 31 - 30 - 31 - leap
    }`;
  }
  if (
    a > 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + leap &&
    a <= 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31 + leap
  ) {
    return `December, ${
      a - 31 - 28 - 31 - 30 - 31 - 30 - 31 - 31 - 30 - 31 - 30 - leap
    }`;
  }
};

getDay(226, false);
