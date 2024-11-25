/*
what is stack?
=>stack is data structure that can store many elements.
=>stack follows LIFO -last in first Out
=>last item added to the stack is the first one to be removed 
ex:Stack Of Plates
**stack Key Operations**
=>push:adds an element to the top of the stack
=>pop:removes and returens the top element of the stack.
=>peek:returns the top element without removing it.
=>isEmpty:checks if the stack is empty.
=>size:returns the number of elements in the stack.


=>No in-buit support of stack in js
=>we will create own stack class
=>we will support all operations 
=>it will be  based upon an array.

-array allows all operatios on data including reading from front and back an array
*/

class Stack {
    items = [];
    constructor() {}
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.isEmpty()) {
        throw new Error("No items to pop");
      }
      return this.items.pop();
    }
  
    peek() {
      if (this.isEmpty()) {
        return null;
      }
  
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  }
  
  export default Stack;