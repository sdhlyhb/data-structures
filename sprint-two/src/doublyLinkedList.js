var DoublyLinkedList = function() {
  var newList = {};
  newList.head = null;
  newList.tail = null;
  newList.size = 0;
  _.extend(newList, DLLMethods);
  return newList;
};

var DLLMethods = {};

DLLMethods.addToTail = function(value) {
  //check if the list is empty;
  var node = new Node(value);
  if (this.size === 0) {
    this.head = node;
  } else {
    this.tail.next = node;
    node.prev = this.tail;
  }
  this.tail = node;
  this.size++;

};

DLLMethods.removeHead = function() {
  if (!this.head) {
    return undefined;
  }
  var currentHead = this.head;
  this.head = currentHead.next;
  this.head.prev = null;
  this.size--;
  // if we removed the only node in the list;
  if (this.size === 0) {
    this.tail = null;

  }
  return currentHead.value;
};


DLLMethods.contains = function(target) {
  var node = this.head;
  while (node) {
    if (node.value === target) {
      return true;
    }
    node = node.next;

  }
  return false;
};



DLLMethods.addToHead = function(value) {
  //Create new node with the value passed to the function
  var newNode = new Node(value);
  //if the size of list is 0, set the head and tail to be the newNode.
  if (this.size === 0) {
    this.head = newNode;
    this.tail = newNode;
  } else { //if the size of list is not 0;
    // set the prev property of the old head to be newNode.
    var oldHead = this.head;
    oldHead.prev = newNode;
    // set the next property of newNode to be the old head;
    newNode.next = oldHead;
    //Update the head to be the newNode;
    this.head = newNode;

  }
  //increase the size by 1;
  this.size++;
};

DLLMethods.removeTail = function() {
  // if no head and tail, return undefined;
  if (this.size === 0) {
    return undefined;
  }

  //store the current tail value to return later;
  var tailValue = this.tail.value;

  // if there is only 1 node in the list:
  if (this.size === 1) {
    // set the head and tail to be null;
    this.head = null;
    this.tail = null;

  } else { // if there is more than 1 node in the list:
    //update the tail to be previous node;
    var oldTail = this.tail;
    this.tail = oldTail.prev;
    //set the new tail next to null;
    this.tail.next = null;
  }
  //decrese the size by 1;
  this.size--;
  return tailValue;

};


// Node for doubly linked list;
var Node = function(value) {
  this.value = value;
  this.next = null;
  this.prev = null;
};