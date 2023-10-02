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
  size() {
    let counter = 0
    let node = this.top
    while (node){
    counter ++
    node = node.next
    }
    return counter
  }
  findMin() {
    let node = this.top
    let min = node.data
    while (node){
      if (min > node.data)
      min = node.data
      node = node .next 
    }
    return min
  }
  sort() {
    let node = this.top
    let sortArr = []
    while (node){
      sortArr.push(node.data)
      node = node.next
      this.pop()
    }
    sortArr.sort().reverse()
    for (let item in sortArr){
      this.push(sortArr[item])
    }
  }
  isEmpty() {
    return this.top === null;
  }
  push(data) {
    const newItem = new Node(data);
    newItem.next = this.top;
    this.top = newItem;
  }
  peek(){
    if(this.top == null){
      throw new Error("The stack is empty")
    }
    return this.top
  }
  pop(){
    if(this.top == null){
      throw new Error("The stack is empty")
    }
    let item = this.top
    if (item) {
      let newItem = item.next
      this.top = newItem
      return item
    }
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
    this.max = 0
  }
  getLast() {
    let node = this.first 
    while (node.next){
      node = node.next
    }
    return node
  }
  findMax(){
    let node = this.first 
    while (node) {
      if (this.max < node.data) {
        this.max = node.data
      }
      node = node.next
    }
    return this.max
  }
  count() {
    let counter = 0
    let node = this.first
    while(node) {
      counter++
      node = node.next
    }
    return counter
  }
  enqueue(data) {
    let newItem = new Node(data)
    if(!this.first) {
      this.first = newItem
      this.last = newItem
    } else {
      this.last.next = newItem
      this.last = newItem 
    }
    return ++this.size;
  }
  dequeue(){
    if (this.first == null){
      throw new Error("The queue is empty")
    }
    const item = this.first
    if (this.first === this.last){
      this.last === null
    }
    this.first = this.first.next
    this.size--
    return item.data
  }
  peek() {
    if (this.first == null){
      throw new Error("The queue is empty")
    }
    return this.first
  }
  isEmpty() {
    return this.first === null
  }
  
}


module.exports = {
  Node,
  Queue,
  Stack,
};
