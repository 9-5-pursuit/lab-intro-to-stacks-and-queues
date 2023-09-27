const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor(top = null) {
    this.top = top;
  }

  push(data) {
    const newItem = new Node(data);
    newItem.next = this.top;
    this.top = newItem;
  }

  pop() {
    if (!this.top) {
      throw new Error("The stack is empty");
    }
    let item = this.top;
    if (item) {
      let newItem = item.next;
      //updates the stack
      this.top = newItem;
      return item;
    }
  }

  size() {
    let count = 0;
    let currentNode = this.top
    while(currentNode) {
      count++
      currentNode = currentNode.next
    }
    return count
  }

  isEmpty() {
    return !this.top ? true : false;
  }

  peek() {
    if (!this.top) {
      throw new Error("The stack is empty");
    }
    return this.top;
  }

  findMin() {
    if (!this.top) {
      throw new Error("The stack is empty");
    }

    let minValue = this.top.data;
    let currentNode = this.top
    while(currentNode) {
      if (currentNode.data < minValue) {
        minValue = currentNode.data;
      }
      currentNode = currentNode.next;
    }
    return minValue;
  }

  sort() {
    if (!this.top) {
      throw new Error("The stack is empty");
    }

    //create array to hold values
    let array = [];
    let item = this.top;
    while (item) {
      array.push(item.data);
      item = item.next;
    }
    array.sort();

    // Clear the original stack
    this.top = null;

    // Push the sorted elements back onto the stack in reverse
    for (let i = array.length - 1; i >= 0; i--) {
      this.push(array[i]);
    }
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = 0;
  }

  enqueue(data) {
    let newItem = new Node(data);
    if (!this.first) {
      this.first = newItem;
      this.last = newItem;
    } else {
      this.last.next = newItem;
      this.last = newItem;
    }
    return this.size++;
  }

  dequeue() {
    if (this.first === null) {
      throw new Error("The queue is empty.")
    }

    const itemToRemove = this.first
    if (this.first === this.last) {
      this.last = null
    }

    this.first = this.first.next
    this.size--

    return itemToRemove.data
  }

  count() {
    if (this.first === null) {
      throw new Error("The queue is empty.");
    }
    return this.size;
  }

  isEmpty() {
    if (this.first === null) {
      return true;
    }
    return false;
  }
}

let wordStack = new Queue()
for (let i = 0; i < words.length; i++) {
  wordStack.enqueue(words[i]);
}

console.log(wordStack.count())


module.exports = {
  Node,
  Queue,
  Stack,
};
