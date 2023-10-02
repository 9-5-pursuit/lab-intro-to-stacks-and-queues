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

}


module.exports = {
  Node,
  Queue,
  Stack,
};
