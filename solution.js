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
}

let wordStack = new Stack()
for (let i = 0; i < words.length; i++) {
  wordStack.push(words[i]);
}
console.log(wordStack.sort());

module.exports = {
  Node,
  Queue,
  Stack,
};
