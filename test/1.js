const test = (str, word) => {
  let currentLetter;
  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i < str.length; i++) {
    console.log(`\n new iteration i = ${i}`);
    currentLetter = str[i];
    console.log(
      `we need to compare current letter "${currentLetter}" and "${word[count1]}"`
    );
    if (currentLetter === word[count1]) {
      console.log(`MATCH`);
      count1++;
      console.log(`new count1 is ${count1}`);
      if (count1 === word.length) {
      }
    }
  }
};

test('hjh4343abaieoeru4abaiu343aba', 'aba');
