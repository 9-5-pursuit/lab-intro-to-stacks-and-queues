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
  isEmpty() {
    return this.top === null;
  }
  findMin() {
    if(this.top === null) {
      return "Stack is empty"
    }
    let currentTop = this.top
    let min = currentTop.data;

    while(currentTop !== null) {
      if (currentTop.data < min) {
        min = currentTop.data;
      }
      currentTop = currentTop.next
    }
    return min
  }
  peek() {
    return this.top
  }
  sort() {
    
  }
}
  

  let numsStack = new Stack();
  let wordsStack = new Stack();

  for(let i=0; i<nums.length; i++) {
    numsStack.push(nums[i])
  }
  for(let i=0; i<words.length; i++) {
    wordsStack.push(words[i])
  }



class Queue {
  constructor() {
      this.first = null;
      this.last = null;
      this.size = 0
      this.maxValue = null
  }
  enqueue(data) {
    let newNode = new Node(data);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
      this.maxValue = data;
    } else {
      this.last.next = newNode;
      this.last = newNode;
      this.maxValue = Math.max(this.maxValue, data);
    }
    return this.size++;
  }


  }









module.exports = {
  Node,
  Queue,
  Stack,
};
