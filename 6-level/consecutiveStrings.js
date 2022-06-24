//https://www.codewars.com/kata/56a5d994ac971f1ac500003e
const strarr = ['zone', 'abigail', 'theta', 'form', 'libe', 'zas'];
const k = 2;
const longestConsec = (s, k) => {
  if (k <= 0 || k > s.length || s.length === 0) return '';
  const res = {};
  let ans = '';
  let maxStartIndex = 0;
  let maxValue = 0;
  let startIndex = 0;
  let accum = 0;
  let counter = 0;
  for (let i = 0; i < s.length; i++) {
    console.log(`\nnew iteration of loop. i=${i}`);
    console.log(`current word is ${s[i]} has length ${s[i].length}`);
    if (counter < k - 1) {
      console.log(`counter less than k`);
      accum += s[i].length;
      console.log(`new accum is`, accum);
      counter++;
      console.log(`new counter is`, counter);
    } else {
      console.log(`full combination`);
      accum += s[i].length;
      console.log(`new accum is`, accum);
      counter++;
      console.log(`new counter is`, counter);
      res[startIndex] = accum;
      console.log(`new res is`, res);
      if (accum > maxValue) {
        console.log(`current accum bigger than max`);
        maxValue = accum;
        console.log(`new max is`, maxValue);
        maxStartIndex = startIndex;
        console.log('newMaxStartIndex is', maxStartIndex);
      } else {
        console.log(
          `current combination ${accum} is not bigger than max ${maxValue}`
        );
      }
      accum -= s[startIndex].length;
      console.log(`decrease accum to a first value. now accum = `, accum);
      startIndex++;
      console.log(`change start index to `, startIndex);
      counter--;
      console.log(`decrease counter, counter = `, counter);
    }
  }
  console.log({ maxStartIndex, maxValue });
  for (let i = 0; i < k; i++) {
    ans += s[maxStartIndex + i];
  }
  console.log(ans);
};

longestConsec(strarr, k);
