const testString = '35-56*56/2-(12+55-12*8)*(4+5)/(12+55-12*8)*(3-1)';

const expressionChecker = (str) => {
  const multDivSolver = (first, second, action) => {
    if (action === '*') {
      return +first * +second;
    }

    if (action === '/') {
      return +first / +second;
    }

    if (action === '+' || action === '-') {
      return first + action + second;
    }
  };
  const addSubstrSolver = (str) => {
    console.log(`substraction and adding str is ${str}`);
    let sum = 0;
    let first = false;
    let second = false;
    let action = false;
    let lastAction;
    let element;
    for (let i = 0; i < str.length; i++) {
      element = str[i];
      if (element === '-' || element === '+') {
        if (!action) {
          action = element;
        } else {
          if (action === '+') {
            sum += +first + +second;
            console.log(`middle res plus is "${sum}"`);
          } else {
            sum += +first - +second;
            console.log(`middle res minus is "${sum}"`);
          }
          first = false;
          second = false;
          action = false;
          lastAction = element;
        }
      } else {
        if (!first) {
          first = element;
        } else if (!action) {
          first += element;
        } else if (!second) {
          second = element;
        } else {
          second += element;
        }
      }
    }
    console.log({ first, second, lastAction, action });
    if (lastAction === '+' || action === '+') {
      sum += second.length > 0 ? +first + +second : +first;
    } else {
      sum -= second.length > 0 ? +first + +second : +first;
    }
    console.log(`result =- func is ${sum}`);
    return sum;
  };
  const subTaskSolver = (task) => {
    console.log('\n SUBSOLVER');
    let temp = '';
    let first = false;
    let second = false;
    let action = false;
    let lastAction = '';
    for (let i = 0; i < task.length; i++) {
      let element = task[i];
      console.log(`checking element = "${element}"`);
      if (
        element === '/' ||
        element === '-' ||
        element === '+' ||
        element === '*'
      ) {
        console.log(`current element "${element}" is action`);
        if (!action) {
          console.log(`action wasn not defined`);
          action = element;
          console.log(`ACTION IS "${action}"`);
        } else {
          console.log(
            `it is an action after action - I need to return a result of previous action and drop all the variables`
          );
          lastAction = element;
          console.log({ first, second, action });
          const smallerRes = multDivSolver(first, second, action);
          temp += smallerRes;
          console.log(`new res is "${temp}"`);
          first = false;
          second = false;
          action = false;
        }
      } else {
        console.log(`current element "${element}" is a number`);
        if (!first) {
          console.log(`First number is not started`);
          first = element;
          console.log(`current first is "${first}"`);
        } else {
          if (action) {
            console.log(`action was defined`);
            if (!second) {
              console.log(
                `First exists, action is defined, second is fale`
              );
              second = element;
              console.log(`current second is "${second}"`);
            } else {
              console.log(`Second number is in proccess of building`);
              second += element;
              console.log(`current second is "${second}"`);
            }
          } else {
            console.log(`first number is in proccess of building`);
            first += element;
            console.log(`current first is "${first}"`);
          }
        }
      }
    }
    const smallerRes = multDivSolver(first, second, action);
    temp += lastAction + smallerRes;
    console.log(`new res is "${temp}"`);
    const finalAfterSimple = addSubstrSolver(temp);
    return finalAfterSimple;
  };
  let newStr = '';
  let subTask = '';
  let start = false;
  let finish = false;
  for (let i = 0; i < str.length; i++) {
    const current = str[i];
    console.log(`\niteration. i="${i}, current="${current}`);
    console.log(`I want to check current`);
    if (current === '(') {
      console.log(`CASE: current is "("`);
      start = i;
      console.log(`change start to "${start}`);
    } else if (current === ')') {
      console.log(`CASE: current is ")"`);

      if (start === false) {
        console.log(`ERROR CASE. THARE IS NO "(" BEFORE ")"`);
        return false;
      }
      finish = i;
      console.log(`change finish to "${finish}`);
      console.log(`I have full subTask = "${subTask}"`);
      newStr += '(' + subTaskSolver(subTask) + ')';
      console.log(
        `current newStr after resolving subTask is "${newStr}"`
      );
      subTask = '';
      start = false;
      finish = false;
    } else if (start !== false) {
      console.log('current is just a regular symbol/number');
      console.log(`still working on subTask filling`);
      subTask += current;
      console.log(`current subTask is "${subTask}"`);
    } else {
      console.log('current is just a regular symbol/number');
      console.log(`I am not working on sunTask filling`);

      newStr += current;
      console.log(`newStr is "${newStr}`);
    }
  }
};

const result = expressionChecker(testString);
