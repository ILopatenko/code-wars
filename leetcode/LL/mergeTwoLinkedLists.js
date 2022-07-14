class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  returnArrayValues() {
    if (this.head === null || this.tail === null || this.length === 0)
      return [];
    const result = [];
    let pointer = this.head;
    while (pointer) {
      result.push(pointer.value);
      pointer = pointer.next;
    }
    return result;
  }

  addNewToTail(value) {
    const newNode = new Node(value);
    if (!this.head && !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
}

const linkedList1 = new LinkedList();
linkedList1.addNewToTail(1);
linkedList1.addNewToTail(2);
linkedList1.addNewToTail(4);
linkedList1.addNewToTail(100);
console.log(linkedList1);

const linkedList2 = new LinkedList();
linkedList2.addNewToTail(1);
linkedList2.addNewToTail(3);
linkedList2.addNewToTail(4);
linkedList2.addNewToTail(6);
linkedList2.addNewToTail(9);
linkedList2.addNewToTail(150);
console.log(linkedList2);

const mergeTwoLL = (list1, list2) => {
  if (list1.length === 0 && list2.length === 0) return [];
  if (list1.length === 0) return list2.returnArrayValues();
  if (list2.length === 0) return list1.returnArrayValues();

  const merged = new LinkedList();
  let pointer1 = list1.head;
  let pointer2 = list2.head;

  while (pointer1 !== null && pointer2 !== null) {
    if (pointer1.value === pointer2.value) {
      merged.addNewToTail(pointer1.value);
      merged.addNewToTail(pointer2.value);
      pointer1 = pointer1.next;
      pointer2 = pointer2.next;
    } else if (pointer1.value < pointer2.value) {
      merged.addNewToTail(pointer1.value);
      pointer1 = pointer1.next;
    } else {
      merged.addNewToTail(pointer2.value);
      pointer2 = pointer2.next;
    }
  }
  let rest = pointer1 ? pointer1 : pointer2;
  while (rest) {
    merged.addNewToTail(rest.value);
    rest = rest.next;
  }
  return merged;
};

console.log(mergeTwoLL(linkedList1, linkedList2).returnArrayValues());
