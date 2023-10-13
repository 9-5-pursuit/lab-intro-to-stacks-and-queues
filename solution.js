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

  size() {
    let count = 0;
    let topNode = this.top;

    while (topNode) {
      count++;
      topNode = topNode.next;
    }
    return count;
  }

  pop() {
    let topNode = this.top;
    if (topNode) {
      let newNode = topNode.next;
      this.top = newNode;
      return topNode;
    }
  }

  isEmpty() {
    return this.top === null;
  }

  findMin() {
    let min = this.top.data;
    let topNode = this.top;
    while (topNode) {
      if (topNode < min) {
        min = topNode;
      }
      topNode = topNode.next;
    }
    return min;
  }

  peek() {
    return this.top;
  }

  sort() {}
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = null;
  }

  count() {
    return this.size;
  }

  dequeue() {
    const removeItem = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return removeItem.data;
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

    return ++this.size;
  }

  findMax() {
    let currentNode = this.first;
    let max = null;
    while (currentNode) {
      if (currentNode.data > max) {
        max = currentNode.data;
      }
      currentNode = currentNode.next;
      this.max = max;
    }

    return max;
  }

  getLast() {
    return this.last;
  }

  isEmpty() {
    return this.first === null;
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
