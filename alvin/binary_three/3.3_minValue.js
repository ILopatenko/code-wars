class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(5);
const b = new Node(11);
const c = new Node(3);
const d = new Node(4);
const e = new Node(15);
const f = new Node(12);
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
console.log(a);

const findMinDepth = (root) => {
  if (root === null) return false;
  const stack = [root];
  let min = root.value;
  while (stack.length > 0) {
    let current = stack.pop();
    if (current.value < min) min = current.value;
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return min;
};

const findMinBreadthIterative = (root) => {
  if (root === null) return false;
  const queue = [root];
  let min = root.value;
  while (queue.length > 0) {
    let current = queue.pop();
    if (current.value < min) min = current.value;
    if (current.right) queue.unshift(current.right);
    if (current.left) queue.unshift(current.left);
  }
  return min;
};

const findMinBreadthRecurcive = (root) => {
  if (root === null) return Infinity;
  const leftMin = findMinBreadthRecurcive(root.left);
  const rightMin = findMinBreadthRecurcive(root.right);
  return Math.min(root.value, leftMin, rightMin);
};

const resultFindMinDepth = findMinDepth(a);
const resultFindMinBreadthIterative = findMinBreadthIterative(a);
const resultFindMinBreadthRecurcive = findMinBreadthRecurcive(a);
console.log(
  resultFindMinDepth,
  resultFindMinBreadthIterative,
  resultFindMinBreadthRecurcive
);
