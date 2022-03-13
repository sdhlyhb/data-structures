var BinarySearchTree = function(value) {


  var tree = {};
  tree.root = null || this;
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


  if (maxDepth(this) > minDepth(this) * 2) {
    return this.rebalance();



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


//depth first traversal

/*
e.g
       4
    3       8
  2   5   7     9

  DFS traversal will be:
  4,3,2,5,8,7,9;
this problem can also be solved using stack.
*/
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





//level order traversal
/*
e.g
       4
    3       8
  2   5   7     9

  BFS traversal will be:
  4,3,8,2,5,7,9;
this problem can  be solved using queue.
*/
// the function below will log all the nodes value in an array in the BFS traversal order.
BSTMethods.breadthFirstLog = function () {
  currNode = this; // start from root;
  var queue = [];
  var nodeValues = [];
  queue.push(currNode);
  while (queue.length > 0) {
    currNode = queue.shift();
    nodeValues.push(currNode.value);
    if (currNode.left) {
      queue.push(currNode.left);
    }
    if (currNode.right) {
      queue.push(currNode.right);
    }


  }
  return nodeValues;


};

var minDepth = function(currNode) {
  if (!currNode) {
    return 0;
  }
  if (!currNode.left && !currNode.right) {
    return 1;
  }
  return 1 + Math.min (this.minDepth(currNode.right), this.minDepth(currNode.left));

};

var maxDepth = function(currNode) {
  if (!currNode) {
    return 0;
  }
  if (!currNode.left && !currNode.right) {
    return 1;
  }
  return Math.max (this.maxDepth(currNode.left), this.maxDepth(currNode.right));

};

BSTMethods.rebalance = function () {
  // get all the node value; soted by value;
  //choose the mid point as root and recursivey rearrange branches.

  var nodeValues = this.breadthFirstLog();
  nodeValues.sort((a, b) => a - b );

  this.root = sortedValuesToBST(nodeValues);
  return this.root;





};


var sortedValuesToBST = function(array) {
  if (array.length === 0) {
    return null;
  }
  return helper(array, 0, array.length - 1);

};

var helper = function(array, low, high) {
  if (low > high) {
    return null;
  }
  var mid = Math.floor((low + high) / 2);
  var node = BinarySearchTree(array[mid]);
  node.left = helper(array, low, mid - 1);
  node.right = helper(array, mid + 1, high);
  return node;

};


// var sortedValuesToBST = function(array) {
//   if (array.length === 0) {
//     return null;
//   }
//   return helper(array, 0, array.length - 1);

//   var helper = function(array, low, high) {
//     if (low > high) {
//       return null;
//     }
//     var mid = Math.floor((low + high) / 2);
//     var node = BinarySearchTree(array[mid]);
//     node.left = helper(array, low, mid - 1);
//     node.right = helper(array, mid + 1, high);
//     return node;

//   };



// };








/*
 * Complexity: What is the time complexity of the above functions?
insert:  O(logN);
contains: O(logN);
depthFirstLog: O(N);
breadthFirstLog: O(N);

 */
