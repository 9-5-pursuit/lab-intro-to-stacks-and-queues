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

  push(data) {
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (!this.isEmpty()) {
      const top = this.top;
      this.top = this.top.next;
      return top;
    }
    return null;
  }

  peek() {
    return this.top;
  }

  findMin() {
    let min = Number.MAX_SAFE_INTEGER;
    let top = this.top;
    while (top) {
      if (top.data < min) min = top.data;
      top = top.next;
    }
    return min;
  }

  sort() {
    let top = this.top;
    let arr = [];
    while (top) {
      let p = this.pop();
      if (p.data) arr.push(p.data);
      top = top.next;
    }
    arr.sort().reverse();
    for (let s of arr) {
      this.push(s);
    }
  }

  isEmpty() {
    return this.top == null;
  }

  size() {
    let count = 0;
    let top = this.top;
    while (top && ++count) {
      top = top.next;
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
