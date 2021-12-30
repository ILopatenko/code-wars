//https://localcoding.us/course/5d1cbf67086fc30038bf1859/lesson/5ddf01541a1ed1003c32d96a

const running = (x) => {
  console.clear();
  console.log(`==>START HERE`);
  day = 1;
  console.log(`day is ${day}`);
  distance = x;
  console.log(`distance was changed to ${distance}`);

  do {
    console.log(`\niteration`);
    day++;
    console.log(`day is ${day}`);
    distance *= 1.1;
    console.log(`distance was changed to ${distance}`);
  } while (day < 10);
  return Math.round(distance);
};

//let ans = running(10);
//console.log(ans);

//https://localcoding.us/course/5d1cbf67086fc30038bf1859/lesson/5ddf01541a1ed1003c32d96a
const bankPercent = (s, p, y) => {
  console.clear();
  console.log(`==>START HERE`);
  do {
    s = s + (s * p) / 100;
    y--;
  } while (y > 0);
  return s.toFixed(2);
};

//let ans = bankPercent(100, 10, 2);
//console.log(ans);

//https://localcoding.us/course/5d1cbf67086fc30038bf1859/lesson/5ddf01541a1ed1003c32d96a
const arrayOfDigits = (n) => {
  let res = [];
  do {
    res.push(n % 10);
    n = (n - (n % 10)) / 10;
  } while (n >= 10);
  res.push(n);
  return res;
};

//https://localcoding.us/course/5d1cbf67086fc30038bf1859/lesson/5ddf01541a1ed1003c32d96a
const evenDigits = (n) => {
  let res = [];
  let str = n.toString();
  let i = 0;
  do {
    if (str[i] % 2 === 0) res.push(+str[i]);
    i++;
  } while (str[i]);
  return res;
};

//https://localcoding.us/course/5d1cbf67086fc30038bf1859/lesson/5ddf01541a1ed1003c32d96a
const bankPercent2 = (p) => {
  let years = 0;
  let yearProfit;
  let total = 1000;
  do {
    years++;
    console.log(`\nprevious ballance is ${total}`);
    console.log(`now years=${years}`);
    yearProfit = (total * p) / 100;
    console.log(`year profit for this year ${yearProfit}`);
    total += yearProfit;
    console.log(`new ballance after ${years} years is ${total}`);
  } while (total < 1500);
  return years;
};
//let ans = bankPercent2(11);
//console.log(ans);

//https://localcoding.us/course/5d1cbf67086fc30038bf1859/lesson/5ddf01541a1ed1003c32d96a
const testData = 12300090;

const reverseWithoutMethodsDOWHILE = (x) => {
  console.log(`start here!`);
  let answer = 0;
  do {
    console.log(`do iteration x=${x}`);
    let current = x % 10;
    console.log(`current=${current}`);
    answer += current;
    console.log(`answer = ${answer}`);
    x -= current;
    x /= 10;
    console.log(`x= ${x}`);
    answer *= 10;
    console.log(`answer=${answer}`);
    console.log('checking x!=0');
  } while (x > 0);
  console.log(`final answer ${answer / 10}`);
};

//reverseWithoutMethodsDOWHILE(testData);

const frogPrincess = (x) => {
  let counter = 0;
  let total = 0;
  do {
    counter++;
    total += x;
    x += 3;
  } while (total < 1000);
  return counter;
};
console.log(frogPrincess(12));
