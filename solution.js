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
    let item = this.top;
    if (item) {
      let newItem = item.next;
      this.top = newItem;
      return item;
    }
  }
  isEmpty() {
    return this.top === null;
  }
  peek() {
    return this.top;
  }
  size() {
    let item = this.top;
    let count = 0;
    while (item != null) {
      count++;
      item = item.next;
    }
    return count;
  }
  findMin() {
    let currentNode = this.top;
    let minValue = currentNode.data;

    while (currentNode !== null) {
      let nextItem = currentNode.next;
      if (nextItem < minValue) {
        minValue = nextItem;
      }
      currentNode = nextItem;
    }
    return minValue;
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
  dequeue() {
    let current = this.first;
    if (!current) {
      let replacement = current.next;
      current = replacement;
      this.size--;
    }
    return current.data;
  }
  isEmpty() {
    return this.first === null;
  }
  peek() {
    return this.first;
  }
  count() {
    return this.size;
  }
  getLast() {
    return this.last;
  }
  findMax() {
    let current = this.first;
    let max = 0;
    while (current !== null) {
      if (current.data > max) max = current.data;
      current = current.next;
    }

    return max;
  }
}
module.exports = {
  Node,
  Queue,
  Stack,
};
