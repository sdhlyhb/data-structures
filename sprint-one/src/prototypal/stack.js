var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.key = 0;
  return newStack;
};

stackMethods = {};
stackMethods.push = function(value) {
  this.key++;
  this.storage[this.key] = value;
};

stackMethods.pop = function() {
  if (this.key > 0) {
    var value = this.storage[this.key];
    delete this.storage[this.key];
    this.key--;
    return value;
  }
};
stackMethods.size = function() {
  return this.key;
};


