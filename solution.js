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
