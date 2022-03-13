var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  newQueue.enQKey = 0;
  newQueue.deQKey = 0;
  return newQueue;
};

var queueMethods = {};
queueMethods.enqueue = function(value) {
  this.storage[this.enQKey] = value;
  this.enQKey++;

};

queueMethods.dequeue = function() {
  if (this.deQKey < this.enQKey) {
    var deQVal = this.storage[this.deQKey];
    delete this.storage[this.deQKey];
    this.deQKey++;
    return deQVal;


  }

};

queueMethods.size = function() {
  return this.enQKey - this.deQKey;
};

