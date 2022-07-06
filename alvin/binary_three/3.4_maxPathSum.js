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

const maxPathRecurcive = (root) => {
  if (root === null) return -Infinity;
  if (root.left === null && root.right === null) return root.value;
  return (
    root.value + Math.max(maxPathRecurcive(root.left, root.right))
  );
};

const resultMaxPathRecurcive = maxPathRecurcive(a);
console.log({ resultMaxPathRecurcive });
