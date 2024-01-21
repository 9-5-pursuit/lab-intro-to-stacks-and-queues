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
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (this.top === null) {
      return "stack is empty";
    }
    let currentTop = this.top;
    this.top = currentTop.next;

    return currentTop;
  }

  size() {
    let count = 0;
    let node = this.top;

    while (node) {
      count++;
      node = node.next;
    }

    return count;
  }

  isEmpty() {
    return this.top === null;
  }

  peek() {
    return this.top;
  }

  findMin() {
    let min = 0;
    let node = this.top;

    while (node) {
      if (node < min) {
        min = node;
      }
      node = node.next;
    }

    return min;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.maxValue = null;
  }

  count() {
    return this.size;
  }

  enqueue(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
      this.maxValue = data;
    } else {
      this.last.next = newNode;
      this.last = newNode;
      if (data > this.maxValue) {
        this.maxValue = data;
      }
    }
    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const dequeuedData = this.first.data;
    this.first = this.first.next;
    this.size--;

    if (this.isEmpty()) {
      this.last = null;
      this.maxValue = null;
    }

    return dequeuedData;
  }

  findMax() {
    return this.maxValue;
  }

  getLast() {
    return this.last;
  }

  isEmpty() {
    return this.size === 0;
  }

  peek() {
    return this.first;
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
