//https://medium.com/@sojibrahmatuzzaman/10-common-javascript-interview-challenges-f2547db5370b
const testWord = 'ababababa';

const chechPalindrome = (s) => {
  for (let i = 0; i <= s.length / 2 - 1; i++) {
    let current = s[i].toLowerCase();
    console.log({ i, current });
    if (current !== s[s.length - i - 1]) {
      console.log(`given world "${testWord}" isn't a palindrome!`);
      return false;
    }
  }
  console.log(`given world "${testWord}" is a palindrome!`);
  return true;
};

const checkPalindromeReverse = (s) => {
  let reversed = s.toLowerCase().split('').reverse().join('');
  console.log(`reversed is`, reversed);
  return reversed === s ? true : false;
};

const result = chechPalindrome(testWord);
console.log(result);

const resultReversed = checkPalindromeReverse(testWord);
console.log(resultReversed);
