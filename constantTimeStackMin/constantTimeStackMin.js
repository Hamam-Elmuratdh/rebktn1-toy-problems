/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.  

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */


  
  class Stack {
    constructor (){
    this.storage = [];
  }

  // add an item to the top of the stack
    push = function(value) {
      this.storage.push(value)

    };

  // remove an item from the top of the stack
    pop = function() {
      if (!this.isEmpty()){
        var val = this.storage.pop();
        return val.value
      }
    };

  // return the number of items in the stack
    size = function() {
      if (!this.isEmpty()){
        return this.storage
      }

    };
  
  // return the minimum value in the stack
    min = function() {
      if (!this.isEmpty()){
        var val = this.storage[this.storage.length -1]
        return val.min

      }

    };
    isEmpty(){
      return this.storage.length === 0;
    }

  };