const gridTraveler = (m, n) => {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
};

/* console.log('Test for (0,0)', gridTraveler(0, 0));
console.log('Test for (1,0)', gridTraveler(1, 0));
console.log('Test for (0,1)', gridTraveler(0, 1));
console.log('Test for (1,1)', gridTraveler(1, 1));
console.log('Test for (2,1)', gridTraveler(2, 1));
console.log('Test for (2,2)', gridTraveler(2, 2));
console.log('Test for (10,10)', gridTraveler(10, 10));
console.log('Test for (18,18)', gridTraveler(18, 18)); */

const gridTravelerAdv = (m, n, memo = {}) => {
  let key = m + ',' + n;
  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  memo[key] =
    gridTravelerAdv(m - 1, n, memo) + gridTravelerAdv(m, n - 1, memo);
  return memo[key];
};
console.log('Test for (0,0)', gridTravelerAdv(0, 0));
console.log('Test for (1,0)', gridTravelerAdv(1, 0));
console.log('Test for (0,1)', gridTravelerAdv(0, 1));
console.log('Test for (1,1)', gridTravelerAdv(1, 1));
console.log('Test for (2,1)', gridTravelerAdv(2, 1));
console.log('Test for (2,2)', gridTravelerAdv(2, 2));
console.log('Test for (10,10)', gridTravelerAdv(10, 10));
console.log('Test for (18,18)', gridTravelerAdv(18, 18));
console.log('Test for (100,100)', gridTravelerAdv(100, 100));
console.log('Test for (1000,1000)', gridTravelerAdv(510, 520));
