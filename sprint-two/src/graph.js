

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
  this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes[node] !== undefined;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.contains(node)) {
    delete this.nodes[node];

    //Also remove the edges containing the node?
    if (this.edges[node]) {
      delete this.edges[node];
    }

  } else {
    // if the node is not defined.
    return undefined;
  }




};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
//each node has an adjacency array in the edges object.
//edges: {nodeA : [nodeB, NodeC], nodeB:[nodeA, nodeD]}

Graph.prototype.hasEdge = function(fromNode, toNode) {
  // check if fromNode and toNode is defined in edges
  if (!this.edges[fromNode] || !this.edges[toNode] ) {
    return false;
  }
  //if defined, check if the fromNode and toNode are in each other's adjacency array.
  return this.edges[fromNode].includes(toNode) &&
         this.edges[toNode].includes(fromNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //check if the fromNode and toNode are defined in the edges.
  //if not, estabilish a container (array) to store the nodes.
  //if already defined, push the nodes in the array.
  if (!this.edges[fromNode]) {
    this.edges[fromNode] = [];
  }
  this.edges[fromNode].push(toNode);

  if (!this.edges[toNode]) {
    this.edges[toNode] = [];
  }
  this.edges[toNode].push(fromNode);

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //remove the fromNode in the adjacency array of toNode;
  //remove the toNode in the adjacency array of fromNode;
  if (this.hasEdge(fromNode, toNode)) {
    var fromNodeIndex = this.edges[toNode].indexOf(fromNode);
    var toNodeIndex = this.edges[fromNode].indexOf(toNode);
    this.edges[toNode].splice(fromNodeIndex, 1);
    this.edges[fromNode].splice(toNodeIndex, 1);

  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes) {
    cb(this.nodes[key]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
addNode: O(1);
contains: O(1);
removeNode: O(1);
addEdge: O(1);
hasEdge: O(n);
removeEdge: O(n);
forEachEdge: O(n);

 */


