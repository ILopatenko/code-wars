class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//console.log(a);

/* By default I am going to use Left Hand Approach 
(all the nodes in 1 level will be visited left to right) */

const hasValueBreadth = (root, target) => {
  if (root === null) return false;
  if (typeof target !== 'string' || !target.trim())
    return 'Enter the correct value as a target';
  const queue = [root];
  while (queue.length > 0) {
    let current = queue.shift();
    if (current.value === target) return true;
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return false;
};

const hasValueDeptIterative = (root, target) => {
  if (root === null) return false;
  if (typeof target !== 'string' || !target.trim())
    return 'Enter the correct value as a target';
  const stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();
    if (current.value === target) return true;
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return false;
};

const hasValueDeptRecurcive = (root, target) => {
  if (root === null) return false;
  if (root.value === target) return true;
  return (
    hasValueDeptRecurcive(root.left, target) ||
    hasValueDeptRecurcive(root.right, target)
  );
};

const resultHasValueBreadth = hasValueBreadth(a, 'c');
const resultHasValueDeptIterative = hasValueDeptIterative(a, 'c');
const resultHasValueDeptRecurcive = hasValueDeptRecurcive(a, 'c');
console.log({
  resultHasValueBreadth,
  resultHasValueDeptIterative,
  resultHasValueDeptRecurcive,
});
