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
    let currentNode = this.top;

    while(currentNode) {
      count++;
      currentNode = currentNode.next;
    }

    return count;
  }

  pop() {
    if (this.top === null) {
      throw new Error("the stack is empty")
    }

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

  findMin() {
    let minValue = this.top.data;
    let currentNode = this.top;

    while (currentNode) {
      if (currentNode.data < minValue) {
        minValue = currentNode.data;
        currentNode = currentNode.next;
      } else {
        currentNode = currentNode.next;
      }
    }

    return minValue;
  }

  peek() {
    if (this.top === null) {
      throw new Error("The stack is empty");
    }

    return this.top;
  }

  sort() {
    let stackArray = []

    let currentNode = this.top

    while (currentNode) {
      stackArray.push(currentNode.data)
      currentNode = this.top.next
    }

    stackArray.sort((a, b) => {
      if (a > b) {
        return 1
      } else if (a < b) {
        return -1
      } else {
        return 0
      }
    })

    this.top = null

    for (const value of stackArray) {
      this.push(value)
    }
  }
}

class Queue {
  
}

module.exports = {
  Node,
  Queue,
  Stack,
};
