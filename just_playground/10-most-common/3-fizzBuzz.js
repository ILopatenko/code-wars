const fizzBuzzGenerator = (x) => {
  for (let i = 1; i <= x; i++) {
    let res = '';
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzBuzz');
      continue;
    }
    if (i % 3 === 0) {
      res += 'fizz';
    }
    if (i % 5 === 0) {
      res += 'buzz';
    }
    console.log(res === '' ? i : res);
  }
};

fizzBuzzGenerator(17);
