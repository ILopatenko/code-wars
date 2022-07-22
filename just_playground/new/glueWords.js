function myFunction(a, b) {
  let res = '';
  a.split('')
    .filter((e) => e !== '%')
    .forEach((e, i) => (res += i === 0 ? e.toUpperCase() : e));
  b.split()
    .reverse()
    .forEach((e) => {
      if (e !== '%') {
        res += e;
      }
    });

  return res;
}
const res = myFunction('c%ountry', 'edis');
console.log(res);
