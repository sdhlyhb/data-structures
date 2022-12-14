var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list._size = 0;

  list.addToTail = function(value) {
    //check if the list is empty;
    var node = new Node(value);
    if (list._size === 0) {

      list.head = node;

    } else {
      list.tail.next = node;

    }
    list.tail = node;
    list._size++;

  };

  list.removeHead = function() {
    if (!list.head) {
      return undefined;
    }
    var currentHead = list.head;
    list.head = currentHead.next;
    list._size--;
    // if we removed the only node in the list;
    if (list._size === 0) {
      list.tail = null;

    }
    return currentHead.value;
  };


  list.contains = function(target) {
    var node = list.head;
    while (node) {
      if (node.value === target) {
        return true;
      }
      node = node.next;

    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail : O(1)
 * removeHead : O(1)
 * contains : O(N)
 */
