var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  //use two pointer:
  var enQKey = 0;
  var deQKey = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {

    storage[enQKey] = value;
    enQKey++;

  };

  someInstance.dequeue = function() {
    if ( deQKey < enQKey) {
      var deQVal = storage[deQKey];
      delete storage[deQKey];
      deQKey++;
      return deQVal;
    }

  };

  someInstance.size = function() {
    return enQKey - deQKey;
  };

  return someInstance;
};
