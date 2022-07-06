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

const BFTRightIterative = (root) => {
  if (root === null) return [];
  const queue = [root];
  const result = [];
  while (queue.length > 0) {
    const current = queue.shift();
    result.push(current.value);
    if (current.right) queue.push(current.right);
    if (current.left) queue.push(current.left);
  }
  return result;
};

const BFTLeftIterative = (root) => {
  if (root === null) return [];
  const queue = [root];
  const result = [];
  while (queue.length > 0) {
    const current = queue.shift();
    result.push(current.value);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return result;
};

const DFTLHI = BFTLeftIterative(a);
const DFTRHI = BFTRightIterative(a);

console.log(
  'Breadth First Traversal with Left Hand Priority (all the nodes in 1 level will be visited left to right) - Iterative approach (using QUEUE DS)',
  DFTLHI
);
console.log(
  'Breadth First Traversal with Right Hand Priority (all the nodes in 1 level will be visited right to left) - Iterative approach (using QUEUE DS)',
  DFTRHI
);
