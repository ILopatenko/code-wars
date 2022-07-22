console.clear();
const test = ['Berlin', 'Paris', 'Prague'];
const solver = (arr) => {
  hash = {};
  for (city of arr) {
    let key = city[0].toLowerCase();
    if (!hash.key) {
      hash.key = [city];
    } else {
      hash.key.push(city);
    }
  }
  return hash;
};
const answer = solver(test);
console.log(answer);
