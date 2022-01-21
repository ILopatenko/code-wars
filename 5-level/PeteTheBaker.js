//https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript
//Pete, the baker

const cakes = (r, a) => {
  let min = null;
  let count;
  for (key in r) {
    if (!a[key]) return 0;
    count = Math.floor(a[key] / r[key]);
    if (min === null) {
      min = count;
    } else {
      if (count < min) {
        min = count;
      }
    }
  }
  return min;
};
