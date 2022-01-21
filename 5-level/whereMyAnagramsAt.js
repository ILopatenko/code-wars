//URL
//TITLE
const word = 'abba';
const array = ['aabb', 'abcd', 'bbaa', 'dada'];
const expecterResult = 'e';
const findMissingLetter = (w, a) => {
  console.log({ w, a });
  const res = [];
  //
  const getHash = (el) => {
    let hash = {};
    for (let i = 0; i < el.length; i++) {
      if (!hash[el[i]]) {
        hash[el[i]] = 1;
      } else {
        hash[el[i]]++;
      }
    }
    return hash;
  };
  //

  //
  const IsHashesEqual = (x, y) => {
    for (key in x) {
      if (x[key] !== y[key]) {
        return false;
      }
    }
    return true;
  };
  //

  const testHash = getHash(w);
  for (let i = 0; i < a.length; i++) {
    let current = a[i];
    let currentHash = getHash(current);
    let isGood = IsHashesEqual(testHash, currentHash);
    if (isGood) res.push(current);
  }
  return res;
};

const actualResult = findMissingLetter(word, array);
console.log(actualResult);
