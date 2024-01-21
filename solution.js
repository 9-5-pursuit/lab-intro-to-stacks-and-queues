const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data, next=null){
    this.data = data
    this.next = next
  }
}

class Queue{
  constructor(){
    this.first = null
    this.last = null
    this.size = 0
  }

  enqueue(data){
    let newNode = new Node(data)
    if(!this.first){
      this.first = newNode
      this.last = newNode
      this.size++
    }
    else{
      this.last.next = newNode
      this.last = newNode
      this.size++
    }
  }

  dequeue(){
    let deQueued  = this.first
    this.first = this.first.next
    this.size--
    if(this.size===0)
      this.last = null
    return deQueued.data
  }

  peek(){
    return this.first
  }

  isEmpty(){
    return this.first === null
  }

  count(){
    return this.size
  }

  getLast(){
    return this.last
  }

  findMax(){
    let max = -Infinity
    let traverse = this.first
    while(traverse){
      if(traverse.data>max)
        max = traverse.data
      traverse = traverse.next
    }
    return max
  }

}

class Stack{
  constructor(top=null, length = 0){
    this.top = top
    this.length = length
  }

  push(data){
    const newNode = new Node(data)
    newNode.next = this.top
    this.top = newNode
    this.length++
  }

  pop(){
    const popped = this.top
    this.top = this.top.next
    this.length--
    return popped
  }

  size(){
    return this.length
  }

  isEmpty(){
    return this.top === null
  }

  peek(){
    return this.top
  }

  findMin(){
    let min = Infinity
    let traverse = this.top
    while(traverse){
      if(traverse.data<min)
        min = traverse.data
      traverse = traverse.next
    }
    return min
  }

  sort(){
    const tempArr = []
    const size = this.length
    for(let i = 0;i<size;i++){
      tempArr.push(this.pop().data) 
    }
    tempArr.sort().reverse()
    for(let i = 0;i<size;i++){
      this.push(tempArr[i])
    }
  }

}

module.exports = {
  Node,
  Queue,
  Stack,
};
