class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(value) {
    const newNode = new Node(value);
    this.root = newNode;
  }

  addValue(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    }
    let temp = this.root;
    while (true) {
      if (newNode.value === temp.value) return undefined;
      if (newNode.value < temp.value) {
        if (!temp.left) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        if (!temp.right) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }

  getListOfMaxInLineSmart() {
    let max = [];
    let pointer = this.root;
    while (pointer) {
      max.push(pointer.value);
      pointer = pointer.right;
    }
    return max;
  }

  getListOfMaxInLine() {
    let output = [this.root.value];
    let currentLine = [this.root];
    let childrenLine = [];
    while (currentLine.length > 0) {
      let element = currentLine.pop();
      for (let key in element) {
        if (key !== 'value' && element[key]) {
          childrenLine.push(element[key]);
        }
      }
      if (childrenLine.length === 0) return output;
      if (currentLine.length === 0) {
        let maxValueOfChildrenLine = childrenLine[0].value;
        for (let i = 1; i < childrenLine.length; i++) {
          if (childrenLine[i].value > maxValueOfChildrenLine) {
            maxValueOfChildrenLine = childrenLine[i].value;
          }
        }
        output.push(maxValueOfChildrenLine);
        currentLine = childrenLine;
        childrenLine = [];
      }
    }
    return output;
  }
}

const myBST = new BST(15);
myBST.addValue(10);
myBST.addValue(20);
myBST.addValue(5);
myBST.addValue(12);
myBST.addValue(17);
myBST.addValue(25);

console.log(myBST.getListOfMaxInLine());
