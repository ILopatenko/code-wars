//https://www.codewars.com/kata/5f5daf1a209a64001183af9b/train/javascript
//v1
const makeChocolates = (small, big, goal) => {
  console.clear();
  console.log(`   ===> START HERE !!! <===`);
  console.log({ small, big, goal });
  let sc;
  //bigger count of BIGs according to limits and possibility to do rest with small
  let bc = Math.floor(goal / 5);
  bc = bc > big ? big : bc;
  console.log(`Bigger allowed count of BIGs is ${bc}`);
  let restAfterBigs = goal - bc * 5;
  console.log(`Rest of goal after ${bc} BIGs is ${restAfterBigs}`);
  if (restAfterBigs % 2 === 0) {
    console.log(
      `rest is even - it's possible (but we have to check small limit)`
    );
    sc = restAfterBigs / 2;

    if (sc > small) {
      console.log(`FINAL ANS -1`);
      return -1;
    } else {
      console.log(`FINAL ANS ${sc}`);
      return sc;
    }
  } else {
    console.log(
      `rest is odd - it isn't possible (we have to decrease bc and try again)`
    );
    if (bc == 0) return -1;
    bc--;
    goal -= bc * 5;
  }

  //CHECKPOINT
  console.log(
    `CHECKPOINT!!!! Current values is`,
    { small, big, goal },
    `BIG COUNTER = ${bc}`
  );

  //bigger count of SMALLS
  sc = goal / 2;
  console.log(`bigger sc = ${sc}`);
  sc = sc > small ? small : sc;
  console.log(`bigger allowed sc = ${sc}`);
  goal -= sc * 2;
  console.log(goal);
  if (goal !== 0) {
    console.log(`final ANS is -1!!!`);
    return -1;
  } else {
    console.log(`final ANS is ${sc}`);
    return sc;
  }
};

makeChocolates(8, 0, 7);

const makeChocolates = (small, big, goal) => {
  let sc;
  let bc = Math.floor(goal / 5);
  bc = bc > big ? big : bc;
  let restAfterBigs = goal - bc * 5;
  if (restAfterBigs % 2 === 0) {
    sc = restAfterBigs / 2;
    return sc > small ? -1 : sc;
  } else {
    if (bc == 0) return -1;
    bc--;
    goal -= bc * 5;
  }
  sc = goal / 2;
  sc = sc > small ? small : sc;
  goal -= sc * 2;
  if (goal !== 0) {
    return -1;
  } else {
    return sc;
  }
};
