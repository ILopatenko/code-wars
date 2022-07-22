function myFunction(arr) {
  const hash = {};
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    if (!hash[word[0]]) {
      hash[word[0]] = [word];
    } else {
      hash[word[0]].push(word);
    }
  }
  return hash;
}

const res = myFunction(['Berlin', 'Paris', 'Prague']);
console.log(res);
