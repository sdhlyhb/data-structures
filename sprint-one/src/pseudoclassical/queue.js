var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.enQKey = 0;
  this.deQKey = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.enQKey] = value;
  this.enQKey++;

};

Queue.prototype.dequeue = function() {
  if (this.deQKey < this.enQKey) {
    var deQVal = this.storage[this.deQKey];
    delete this.storage[this.deQKey];
    this.deQKey++;
    return deQVal;
  }


};

Queue.prototype.size = function() {
  return this.enQKey - this.deQKey;
};

var NewQueue = new Queue();
