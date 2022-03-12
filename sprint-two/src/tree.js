var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  newTree.parent = parent || null;
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var subTree = new Tree(value);
  this.children.push(subTree);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } else {
    for (var i = 0; i < this.children.length; i ++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
    return false;
  }
};


// !!!!!!!!!
treeMethods.removeFromParent = function () {

};




treeMethods.traverse = function (callback, currNode) {
  var currNode = currNode || this;
  var queue = [];
  queue.push(currNode);
  while (queue.length > 0) {
    currNode = queue.shift();
    if (currNode.value) {
      callback(currNode.value);
    }

    if (currNode.children) {
      currNode.children.forEach(function(subTree) {
        queue.push(subTree);

      });
    }
  }

};


/*
 * Complexity: What is the time complexity of the above functions?
 * addChild : O(1)
 * contains: O(N)
 * traverse: O(N)
 *
 */
