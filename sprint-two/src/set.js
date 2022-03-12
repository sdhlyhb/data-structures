var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};
//to handle both number and string:
//e.g. set.add(10);    set._storage: {'10' : {number: true}};
//set.add('10'); set._storage: {'10' : {number: true, string:true}};
//or easier way: using JSON.stringify(item);
// set.add('10') = {'"10"' : }
// "\"10\""
setPrototype.add = function(item) {
  this._storage[JSON.stringify(item)] = true;
};

setPrototype.contains = function(item) {
  return !!this._storage[JSON.stringify(item)];
};

setPrototype.remove = function(item) {
  // if (this.contains(item)) {
  //   if (typeof(item) === 'number') {
  //     delete this._storage[item]['number'];

  //   } else if (typeof(item) === 'string') {
  //     delete this._storage[item]['string'];
  //   }
  delete this._storage[JSON.stringify(item)];
};

/*
 * Complexity: What is the time complexity of the above functions?
O(1);
 */
