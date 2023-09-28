const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node{
  constructor(data = null){
    this.data = data;
    this.next = null;
  }
}

class Stack{
  constructor(top){
    this.top = top;
  }

  push(data){
    let newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop(){
    let item = this.top;
    if(item){
      let newItem = item.next;
      this.top = newItem;
      return item;
    }
  }

  isEmpty(){
    return !this.top
  }

  findMin(){
    let currentNode = this.top;
    let minNode = this.top;
    while(currentNode){
      minNode = currentNode.data < minNode.data ? currentNode : minNode;
      currentNode = currentNode.next;
    }
    return minNode.data;
  }

  peek(){
    return this.top;
  }
}


class Queue{
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = null;
  }

  enqueue(data){
    let newItem = new Node(data)
    if(!this.first){
      this.first = newItem;
      this.last = newItem;
    }else{
      this.last.next = newItem;
      this.last = newItem;
    }
    this.size++
  }

  dequeue(){
    let item = this.first;
    if(this.first === this.last){
      this.first = null
      this.last = null
    }else{
      this.first = this.first.next;
    }
    this.size--
    return item.data;
  }
  isEmpty(){
    return this.first ? false : true;
  }
  peek(){
    return this.first;
  }
  getLast(){
    return this.last;
  }
  findMax(){
    let currentValue = this.first;
    let max = currentValue;
    while(currentValue){
      max = currentValue.data > max.data ? currentValue: max;
      currentValue = currentValue.next
    }
    return max.data;
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
