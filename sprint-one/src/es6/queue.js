class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.enQKey = 0;
    this.deQKey = 0;
  }


  enqueue(value) {
    this.storage[this.enQKey] = value;
    this.enQKey++;
  }

  dequeue() {
    if (this.deQKey < this.enQKey) {
      var deQVal = this.storage[this.deQKey];
      delete this.storage[this.deQKey];
      this.deQKey++;
      return deQVal;

    }
  }

  size() {
    return this.enQKey - this.deQKey;
  }


}

var NewQueue = new Queue();
