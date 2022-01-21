//https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript
//RGB To Hex Conversion

const rgb = (r, g, b) => {
  const convertToHex = (a) => {
    if (a < 0) {
      a = 0;
    }
    if (a > 255) {
      a = 255;
    }
    if (a === 0) {
      return '00';
    }
    let res = a.toString(16).toUpperCase();
    return res.length === 1 ? '0' + res : res;
  };
  return convertToHex(r) + convertToHex(g) + convertToHex(b);
};
