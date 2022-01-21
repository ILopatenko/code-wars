//https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1
//Human readable duration format

//
const formatDuration = (s) => {
  if (s === 0) return 'now';
  console.clear();
  console.log(`\n\n   ===> START HERE !!!!`);
  console.log(`test data: "${s}"`);
  const arr = [];
  let res = [];
  let text = '';
  let names = ['year', 'day', 'hour', 'minute', 'second'];
  //SECONDS
  let seconds = s % 60;
  arr.unshift(seconds);
  secondsText = seconds === 1 ? `and 1 second` : ` and ${seconds} seconds`;
  console.log(`secondsText = "${secondsText}"`);
  //MINUTES
  let minutes = ((s - seconds) % 3600) / 60;
  console.log('MINUTES: ', minutes);
  arr.unshift(minutes);

  //HOURS
  let hours = ((s - seconds - minutes * 60) % 86400) / 3600;
  console.log('HOURS: ', hours);
  arr.unshift(hours);

  //DAYS
  let days = ((s - seconds - minutes * 60 - hours * 3600) % 31536000) / 86400;
  console.log('DAYS: ', days);
  arr.unshift(days);

  //YEARS
  let years =
    ((s - seconds - minutes * 60 - hours * 3600 - days * 86400) % 11510640000) /
    31536000;
  console.log('years: ', years);
  arr.unshift(years);

  //ANS

  console.log(arr);
  console.log(names);

  for (let i = 0; i < names.length; i++) {
    console.log(`\niteration. i="${i}"`);
    console.log(`Working with ${names[i]}"`);
    console.log(`value ${arr[i]}"`);

    if (arr[i]) {
      if (arr[i] === 1) {
        res.push(`1 ${names[i]}`);
      }
      if (arr[i] > 1) {
        res.push(`${arr[i]} ${names[i]}s`);
      }
    }
  }
  console.log(res);

  for (let i = 0; i < res.length; i++) {
    if (i !== res.length - 1) {
      if (i === res.length - 2) {
        text += res[i];
      } else {
        text += res[i] + ', ';
      }
    } else {
      if (text.length > 0) {
        text += ` and ${res[i]}`;
      } else {
        text += `${res[i]}`;
      }
    }
  }
  return text;
};

const actualResult = formatDuration(55826596);

/* const formatDuration = (s) => {
  if(s===0)return 'now'
  const arr = [];
  let res = [];
  let text = '';
  let names = ['year', 'day',  'hour','minute', 'second'];
  //SECONDS
  let seconds = s % 60;
  arr.unshift(seconds);
  //MINUTES
  let minutes = ((s - seconds) % 3600) / 60;
  arr.unshift(minutes);
  //HOURS
  let hours = ((s - seconds - minutes * 60) % 86400) / 3600;
  arr.unshift(hours);
  //DAYS
  let days = ((s - seconds - minutes * 60 - hours * 3600) % 31536000) / 86400;
  arr.unshift(days);
  //YEARS
  let years =
    ((s - seconds - minutes * 60 - hours * 3600 - days * 86400) % 11510640000) /
    31536000;
  arr.unshift(years);

  //ANS
  for (let i = 0; i < names.length; i++) {
    if (arr[i]) {
      if (arr[i] === 1) {
        res.push(`1 ${names[i]}`);
      }
      if (arr[i] > 1) {
        res.push(`${arr[i]} ${names[i]}s`);
      }
    }
  }
  for (let i = 0; i < res.length; i++) {
    if (i !== res.length - 1) {
      if(i===res.length-2){
        text += res[i];
      }else{
        text += res[i] + ', ';
      }
    } else {
      if (text.length > 0) {
        text += ` and ${res[i]}`;
      } else {
        text += `${res[i]}`;
      }
    }
  }
  return text
}; */
