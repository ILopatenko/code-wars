//https://www.hackerrank.com/challenges/one-month-preparation-kit-pangrams/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one&h_r=next-challenge&h_v=zen

const testString =
  'We promptly judged antique ivory buckles for the prize';

const pangrams = (s) => {
  const hash = {};
  let counter = 0;
  let current;
  for (let i = 0; i < s.length; i++) {
    console.log(`\nnew iteration i=${i}`);
    current = s[i].toLowerCase();
    console.log(`current is`, current);
    console.log(`hash is`, hash);
    console.log(`counter is`, counter);

    if (!hash[current]) {
      console.log(`hash does not have a current key`);
      hash[current] = 1;
      console.log(`hash is`, hash);
      counter++;
      console.log(`counter is`, counter);
      console.log(`it is time to check counter`);
      if (counter === 27) {
        console.log(`counter = 26`);
        return 'pangram';
      }
    } else {
      console.log(`hash has a current key`);

      hash[current]++;
      console.log(`hash is`, hash);
    }
  }
  return 'not pangram';
};

const res = pangrams(testString);
console.log(res);
