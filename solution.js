const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  pop() {
    if (!this.isEmpty()) {
      const node = this.top;
      this.top = this.top.next;
      return node;
    }
    return null;
  }

  push(data) {
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
  }
  peek() {
    return this.top;
  }

  findMin() {
    let min = this.top.data;
    let node = this.top;
    while (node) {
      if (min > node.data) {
        min = node.data;
      }
      node = node.next;
    }
    return min;
  }

  sort() {
    let node = this.top;
    let arr = [];
    while (node) {
      let removed = this.pop();
      if (removed.data) arr.push(removed.data);
      node = node.next;
    }
    arr.sort().reverse();
    for (let ele of arr) {
      this.push(ele);
    }
  }

  isEmpty() {
    return this.top == null;
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
}
class Queue {
  constructor() {
    this.first = null;
    this.last = this.first;
    this.size = 0;
    this.max = 0;
  }
  count() {
    return this.size;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }

    const first = this.first;
    this.first = this.first.next;
    this.size--;

    if (this.size === 0) {
      this.last = null;
    }
    return first.data;
  }

  enqueue(data) {
    const newNode = new Node(data);
    if (!this.first && newNode.data) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    if (data > this.max) {
      this.max = data;
    }
  }
  findMax() {
    return this.max;
  }
  getLast() {
    return this.last;
  }
  isEmpty() {
    return this.size == 0;
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
