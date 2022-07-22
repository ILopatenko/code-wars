const testCase = ['test', 'ttse'];
const anagramChecker = (array) => {
  const hashCreator = (str) => {
    const hashTable = {};
    for (let letter of str) {
      !hashTable[letter] ? (hashTable[letter] = 1) : hashTable[letter]++;
    }
    return hashTable;
  };
  const firstHash = hashCreator(array[0]);
  const secondHash = hashCreator(array[1]);
  let phrase = `You wanted to test if "${array[0]}" and "${array[1]}" are anagrams! And the result is `;
  for (let key in firstHash) {
    if (firstHash[key] !== secondHash[key]) phrase + false;
  }
  return phrase + true;
};
const result = anagramChecker(testCase);
console.log(result);
