const sunnyDays = [
  1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1,
  1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1,
  0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0,
  0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0,
  0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
  0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1,
  0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0,
  0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1,
  1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1,
  0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0,
  1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1,
  1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1,
  0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1,
  0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1,
];

const countSynnyDays = (array) => {
  let result = {};
  for (let i = 0; i < array.length; i++) {
    console.log(`\nnew iteration i = ${i}`);

    console.log(`This is a day #${i % 30} and month #${Math.floor(i / 30)}`);
    if (sunnyDays[i] === 1) {
      if (result[Math.floor(i / 30) + 1]) {
        result[Math.floor(i / 30) + 1]++;
      } else {
        result[Math.floor(i / 30) + 1] = 1;
      }
    }
  }
  console.log(result);
};

sunnyDaysLoop = (arr) => {
  let res = {};
  let currentMonth = 0;
  let tempMonth;
  let sunnyDaysCounter = 0;
  for (let i = 0; i < arr.length; i++) {
    console.log(`\ncurrent i=${i}`);
    console.log(`lets check if current day is sunny`);
    if (arr[i] === 1) {
      console.log(`this day is sunny`);
      console.log(`lets check month of this day`);
      tempMonth = Math.floor(i / 30);
      console.log(`this is a day from month ${tempMonth}`);
      console.log(`check if tempMonth === currentMonth`);
      if (tempMonth === currentMonth) {
        console.log('tempMonth===currentMonth - sunnuDayCounter ++');
        sunnyDaysCounter++;
      } else {
        res[currentMonth] = sunnyDaysCounter;
        sunnyDaysCounter = 1;
        currentMonth++;
      }
    } else {
      console.log(`this is not a sunny`);
    }
  }
  console.log(res);
};
//countSynnyDays(sunnyDays);
sunnyDaysLoop(sunnyDays);
