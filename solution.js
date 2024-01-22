const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data = null){
    this.data = data;
    this.next = null;
  };
};

class Stack{
  constructor(data = null){
    this.length = 0;
    if(!data){
      this.top = null;
    }
    else{
      this.top = new Node(data);
      this.length++;
    }
  };
  checkElement(){
    let current = this.top;
    while(current){
      console.log(current);
      current = current.next;
    }
  }
  push(data){
    let newNode = new Node(data);
    this.length++;
    newNode.next = this.top;
    this.top = newNode;
  };

  pop(){
    if(this.isEmpty())
      return ;
    let temp = this.top;
    this.top = this.top.next;
    this.length--;
    return temp;
  };

  size(){
    return this.length;
  };

  isEmpty(){
    return this.top == null;
  };

  peek(){
    return this.top;
  };

  findMin(){
    let min = Infinity;
    let current = this.top;
    
    while(current){
      if(current.data < min) 
        min = current.data;
      current = current.next;
    };

    return min;
  };

  sort(){
    let flag = false;
    while(!flag){
      let current = this.top;
      flag = true;
      while(current.next && current){
        if(current.data > current.next.data){  
          let temp = current.data;
          current.data = current.next.data;
          current.next.data = temp;
          flag = false;
        }
        current = current.next;
      }
    }  
  }
};

class Queue{
  constructor(data = null){
    this.length = 0;
    if(!data){
      this.first = null;
      this.last = null;
    }
    else{
      let newNode  = new Node(data)
      this.first = newNode;
      this.last = newNode;
      this.length++;
    }
  };

  enqueue(data){
    let newNode = new Node(data);
    
    if(this.isEmpty()){
      this.first = newNode;
      this.last = this.first;
    }
    else{
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
  };

  dequeue(){
    let temp = this.first;
    if(this.first.next)
      this.first = this.first.next;
    this.length--;
    return temp.data;
  };

  count(){
    return this.length;
  };

  isEmpty(){
    return this.first == null;
  };

  peek(){
    return this.first;
  };

  getLast(){
    return this.last;
  };

  findMax(){
    let max = -Infinity;
    let current = this.first;
    
    while(current){
      
      if(current.data > max) 
        max = current.data;
      current = current.next;
    };

    return max;
  };
};

module.exports = {
  Node,
  Queue,
  Stack,
};
