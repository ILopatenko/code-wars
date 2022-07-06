class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(a);

/* By default I am going to use Left Hand Approach 
(all the nodes in 1 level will be visited left to right) */

const sumOfNodesBreadth = (root) => {
  if (root === null) return false;
  const queue = [root];
  let sum = 0;
  while (queue.length > 0) {
    let current = queue.shift();
    sum += current.value;
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return sum;
};

const sumOfNodesDeptIterative = (root) => {
  if (root === null) return false;
  const stack = [root];
  let sum = 0;
  while (stack.length > 0) {
    const current = stack.pop();
    sum += current.value;
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return sum;
};

const sumOfNodesDeptRecurcive = (root) => {
  if (root === null) return 0;
  return (
    root.value +
    sumOfNodesDeptRecurcive(root.left) +
    sumOfNodesDeptRecurcive(root.right)
  );
};

const resultSumOfNodesBreadth = sumOfNodesBreadth(a);
const resultSumOfNodesDeptIterative = sumOfNodesDeptIterative(a);
const resultSumOfNodesDeptRecurcive = sumOfNodesDeptRecurcive(a);
console.log({
  resultSumOfNodesBreadth,
  resultSumOfNodesDeptIterative,
  resultSumOfNodesDeptRecurcive,
});
