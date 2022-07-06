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

console.log(a);

const DFTLeftIterative = (root) => {
  if (root === null) return [];
  const stack = [root];
  const result = [];
  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.value);
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return result;
};

const DFTRightIterative = (root) => {
  if (root === null) return [];
  const stack = [root];
  const result = [];
  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.value);
    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }
  return result;
};

const DFTRightRecurcive = (root) => {
  if (root === null) return [];
  const leftSide = DFTRightRecurcive(root.left);
  const rightSide = DFTRightRecurcive(root.right);
  return [root.value, ...rightSide, ...leftSide];
};

const DFTLeftRecurcive = (root) => {
  if (root === null) return [];
  const leftSide = DFTLeftRecurcive(root.left);
  const rightSide = DFTLeftRecurcive(root.right);
  return [root.value, ...leftSide, ...rightSide];
};

const DFTLHI = DFTLeftIterative(a);
const DFTRHI = DFTRightIterative(a);
const DFTRHR = DFTRightRecurcive(a);
const DFTLHR = DFTLeftRecurcive(a);
console.log(
  'Depth First Traversal with Left Hand Priority - Iterative approach (using STACK DS)',
  DFTLHI
);
console.log(
  'Depth First Traversal with Right Hand Priority - Iterative approach (using STACK DS)',
  DFTRHI
);
console.log(
  'Depth First Traversal with Left Hand Priority - RECURCIVE',
  DFTLHR
);
console.log(
  'Depth First Traversal with Right Hand Priority - RECURCIVE',
  DFTRHR
);
