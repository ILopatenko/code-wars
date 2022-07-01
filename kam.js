const testArray = [
  { spec: 'one', time: 2.6987 },
  { spec: 'one', time: 3.5648 },
  { spec: 'two', time: 7.454 },
  { spec: 'two', time: 36.5555 },
];

const hash = {};

const func = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(`iteration i=${i}`);
    if (!hash[arr[i]['spec']]) {
      console.log(`new`);
      hash[arr[i]['spec']] = arr[i]['spec'];
      console.log(hash[arr[i]['spec']]);
    } else {
      console.log(`exists`);
      hash[arr[i]['spec']]++;
      console.log(hash[arr[i]['spec']]);
    }
  }
  console.log(hash);
  for (let key in hash) {
    console.log(`key is ${key}`);
    console.log(`"spec":${key}, "time":${+hash[key].toFixed(2)}`);
  }
};

func(testArray);
