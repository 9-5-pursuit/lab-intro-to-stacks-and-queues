const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor(top = null) {
      this.top = top;
  }
    
  push(data) {
    const newNode = new Node(data);
    newNode.next = this.top
    this.top = newNode;
  }
  size() {
    let count = 0;
    let current = this.top;
    while (current !== null) {
      count++;
      current = current.next;
    }
    return count;
  }
  pop() {
    if (this.top === null) {
      return "Stack is empty";
    }
    let currentTop = this.top;
    this.top = currentTop.next;

    return currentTop
  }
}
  

  let numsStack = new Stack();
  let wordsStack = new Stack();



  class Queue {
    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0
    }


  }









module.exports = {
  Node,
  Queue,
  Stack,
};
