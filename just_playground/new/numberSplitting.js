function myFunction(a) {
  let res = [];
  let b = a;
  while (b >= 1) {
    let last = b % 10;
    res.unshift(last);
    b = (b - last) / 10;
  }
  return res;
}

const res = myFunction(123456);
console.log(res);
