const simpleExpression = '245*3';

const expResolver = (str) => {
  checkIfOperator = (element) => {
    if (
      element === '+' ||
      element === '-' ||
      element === '/' ||
      element === '*'
    ) {
      return true;
    } else {
      return false;
    }
  };
  const simpleCase = (first, second, operator) => {};
  const highPriority = (high) => {
    console.log(
      `highPriority helper is working ... you want to find and resolve all the actions with a high priority: multiplication and division`
    );
    console.log(`you wat to check "${high}"`);
    let sum = 0;
    let first = false;
    let second = false;
    let operator = false;
    for (let i = 0; i < high.length; i++) {
      const element = high[i];
      console.log(
        `\niteration. i="${i}" and current element is "${element}"`
      );
      console.log(
        ` Step 1 - checking if element is a number or operator`
      );
      const isOperator = checkIfOperator(element);
      if (isOperator) {
        console.log(`  this is an operator`);
        console.log(
          `   Step 2 - I have to check if operator was already found`
        );
        if (operator) {
          console.log(`    Operator was already found.`);
          console.log(
            `     Step 3 - I have to calculate previous simple expression`
          );
          console.log(
            `       first="${first}, second="${second}" and operator="${operator}"`
          );
        } else {
          console.log(`    Operator was not already found.`);
          operator = element;
          console.log(`     Step 4 - New operator is "${operator}"`);
        }
        operator = element;
      } else {
        console.log(`  this is a number`);
        console.log(
          `   Step 2 - I have to check first number exists`
        );
        if (first) {
          console.log(`    First number exists`);
          console.log(
            `     Step 3 - I have to check if second was found`
          );
          if (!second) {
            console.log(`      Second was not found`);
            console.log(
              `       Step 4 - I have to check if operator was found`
            );

            if (operator) {
              console.log(`        Operator was found`);
              second = element;
              console.log(
                `        Step 5 - New second is "${second}"`
              );
            } else {
              console.log(`        Operator was not found`);
              first += element;
              console.log(`        Step 5 - New first is "${first}"`);
            }
          } else {
            console.log(`      Second was found`);
            second += element;
            console.log(`       Step 5 - New second is "${second}"`);
          }
        } else {
          console.log(`    First number does not exist`);
          first = element;
          console.log(`     Step 3 - New first number is "${first}"`);
        }
      }
    }
    console.log({ first, second, operator });
    if (first !== false && second !== false && operator !== false) {
      sum += simpleCase(first, second, operator);
    }
    return true;
  };
  const lowPriority = (str) => {};

  const testHigh = highPriority(simpleExpression);
  console.log(`result of highPriority is "${testHigh}"`);
};
expResolver(simpleExpression);
