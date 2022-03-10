

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

//a hashtable will look like:
//_storage: [[bucket 0], [bucket 1], [], [], ...[bucket _limit -1]];
//those indices are obstained from function getIndexBelowMaxForKey(k, _limit);
//there is posibility to have more than one key point to the same index.
//so the bucket may contain more than one sub array [k, v] to handle hash function collision.
//like _storage : [[[k, v]],[[k,v], [k3, v3], [k4,v4]],[k2, v2]...]

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  //if bucket at this index is undefined or empty (e.g inside subarray has been removed)
  if (!bucket) {
    this._storage[index] = [[k, v]];

  } else {
    //if the bucket at this index is defined. check the sub arrays inside the bucket:
    //if there is already k in the sub array as key, update the value with the new value;
    //if not, push the new pair [k, v] into the bucket.

    var found = false;
    for (var i = 0; i < bucket.length; i ++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
        found = true;
      }
    }
    if (!found) {
      bucket.push([k, v]);
    }
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  if (!bucket) {
    return undefined;
  } else {
    for (var j = 0; j < bucket.length; j++) {
      if (bucket[j][0] === k) { //check if key value exist in the bucket
        return bucket[j][1];
      }
    }
    return undefined;
  }

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  if (bucket) {
    for ( var m = 0; m < bucket.length; m++) {
      if (bucket[m][0] === k) {
        bucket.splice(m, 1);
      }
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
insert: O(1);
removed: O(1);
retrieve: O(1);
 */


