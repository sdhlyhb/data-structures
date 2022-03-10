var BinarySearchTree = function(value) {

  var tree = {};
  tree.value = value;
  tree.left = null;
  tree.right = null;
  _.extend(tree, BSTMethods);
  return tree;

};

var BSTMethods = {};

BSTMethods.insert = function(value) {
  var treeNode = BinarySearchTree(value);

  // if insert value is less than root value,
  // it will be inserted in the left side of the BST;
  if (this.value > value) {
    //check left branch
    if (!this.left) {
      this.left = treeNode;
    } else {
      this.left.insert(value);
    }
  }
  // if insert value is larger than root value,
  // it will be inserted in the right side of the BST;
  if (this.value < value) {
    //check right branch
    if (!this.right) {
      this.right = treeNode;
    } else {
      this.right.insert(value);
    }
  }

};


BSTMethods.contains = function(value) {
  //check root
  if (this.value === value) {
    return true;
  }
  if (value < this.value) {
    if (!this.left) {
      return false;
    }
    return this.left.contains(value);
  } else {
    if (!this.right) {
      return false;
    }
    return this.right.contains(value);
  }

};

BSTMethods.depthFirstLog = function(callback, currNode) {
  currNode = currNode || this;
  callback(currNode.value);
  if (currNode.left) {
    currNode.depthFirstLog(callback, currNode.left);

  }
  if (currNode.right) {
    currNode.depthFirstLog(callback, currNode.right);
  }

};


/*
 * Complexity: What is the time complexity of the above functions?
insert:  O(logn);
contains: O();
depthFirstLog: O();

 */
