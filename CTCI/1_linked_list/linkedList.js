class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value = null) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  addToTail(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  addToHead(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  deleteFromHead() {
    const pointer = this.head;
    this.head = pointer.next;
    pointer.next = null;
    this.length--;
    return pointer;
  }

  deleteFromTail() {
    let pointer = this.head;
    while (pointer.next.next !== null) {
      pointer = pointer.next;
    }
    this.tail = pointer;
    pointer = this.tail.next;
    this.tail.next = null;
    this.length--;
    return pointer;
  }

  deleteByValue(value) {
    console.log(`work with ${value}`);
    if (this.head === value) {
      this.deleteFromHead();
    }
    if (this.tail === value) {
      this.deleteFromTail();
    }
    let prev = this.head;
    while (prev.next.value !== value) {
      prev = prev.next;
    }
    let target = prev.next;
    let next = target.next;
    target.next = null;
    prev.next = next;
    this.length--;
    return target;
  }
  removeDuplicates() {
    const hash = {};
    let pointer = this.head;

    while (pointer.next !== null) {
      console.log(`\nwhile. pointer=${pointer.value}`);
      if (!hash[pointer.value]) {
        console.log('new value');
        hash[pointer.value] = true;
        console.log('hash is', hash);
      } else {
        console.log(`need to delete`);
        console.log(pointer.value);
        this.deleteByValue(pointer.value);
        console.log(this);
      }
    }
    return this;
  }
}

const myLinkedList = new LinkedList(100);
myLinkedList.addToTail(200);
myLinkedList.addToTail(200);
myLinkedList.addToTail(200);
myLinkedList.addToTail(200);
myLinkedList.addToTail(200);
myLinkedList.addToTail(300);
console.log(myLinkedList);

myLinkedList.removeDuplicates();
console.log(myLinkedList);
