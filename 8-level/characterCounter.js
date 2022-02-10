//https://www.codewars.com/kata/56786a687e9a88d1cf00005d/train/javascript
//Character Counter
const testData =
  'qplhrvundefined7undefinedh4@11nd70v9@etwmqqqqppppllllhhhrrrrvvvuuufffiii7774444@@@11100009999ttttwwwwmmmm';
const expecterResult = true;
const validateWord = (s) => {
  console.clear();
  console.log(`\n\n   ===> START HERE !!!!`);
  console.log(`test data input: "${s}"`);
  console.log(`expected result: "${expecterResult}"`);

  let hash = {};
  let current;
  for (let i = 0; i < s.length; i++) {
    console.log(`\niteration. i=${i}`);
    current = s[i].toLowerCase();
    console.log(`current=${current}`);
    console.log(`current hash is `, hash);

    if (hash[current] !== undefined) {
      console.log(`exists`);
      hash[current]++;
      console.log(hash);
    } else {
      console.log(`unique`);
      hash[current] = 1;
      console.log(hash);
    }
  }
  let repeat = 0;
  for (key in hash) {
    if (!repeat) {
      repeat = hash[key];
    } else {
      if (repeat !== hash[key]) {
        return false;
      }
    }
  }

  return true;
};

const actualResult = validateWord(testData);
const isEqual = actualResult === expecterResult;
console.log(`\n   ===>FINAL RESULT`, isEqual);

/* const validateWord=s=>{
  let hash={}
  let current;
  for(let i=0;i<s.length;i++){
    current=s[i].toLowerCase()
    if(hash[current]!==undefined){
      hash[current]++
    }else{
      hash[current]=1
    }
  }
  let repeat = 0
  for(key in hash){
    if(!repeat){
      repeat=hash[key]
    }else{
      if(repeat!==hash[key]){
        return false
      }
    }
  }
 return true
} */
