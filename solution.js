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

  }


  class Queue {
    consturctor() {
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
