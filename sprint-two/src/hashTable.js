

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._filledSpaces = 0;
};

//a hashtable will look like:
//_storage: [[bucket 0], [bucket 1], [], [], ...[bucket _limit -1]];
//those indices are obstained from function getIndexBelowMaxForKey(k, _limit);
//there is posibility to have more than one key point to the same index.
//so the bucket may contain more than one sub array [k, v] to handle hash function collision.
//like _storage : [[[k, v]],[[k1,v1], [k3, v3], [k4,v4]],[k2, v2]...]
// However, in this problem,this._storage is an object but not an array. Helper function LimitedArray() turned the _storage into an object.

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  //if bucket at this index is undefined or empty (e.g inside subarray has been removed)
  if (!bucket) {
    this._storage.set(index, [[k, v]]);
    this._filledSpaces++;

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
      this._filledSpaces++;
    }
    if (this._filledSpaces / this._limit >= 0.75) {
      var _newLimit = this._limit * 2;
      this.resize(_newLimit);
    }
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
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
  var bucket = this._storage.get(index);
  if (bucket) {
    for ( var m = 0; m < bucket.length; m++) {
      if (bucket[m][0] === k) {
        bucket.splice(m, 1);
        this._filledSpaces--;
      }
    }
  }
  if (this._filledSpaces / this._limit < 0.25) {
    var _newLimit = this._limit / 2;

    this.resize(_newLimit);
  }
};



// resize the hashTable to reduce collision:
HashTable.prototype.resize = function(_newLimit) {
  var _oldStorage = this._storage;
  this._limit = _newLimit; // new limit
  this._storage = LimitedArray(_newLimit); //new storage
  var testArray = [];
  //loop through the old storage to get every tuple and re-assign them to the new array (new storage);
  // _oldStorage.each( function(bucket, index, array) {
  //   // if (bucket) {
  //   //   for (var i = 0; i < bucket.length; i ++) {
  //   //     //this.insert(bucket[i][0], bucket[i][1]);
  //   //     var curTuple = bucket[i];
  //   //     var curKey = curTuple[0];
  //   //     var curValue = curTuple[1];
  //   //     var newIndex = getIndexBelowMaxForKey(curKey, this._limit)
  //   //     var newBucket = this._storage.get(newIndex);
  //   //     // if (!newBucket) {
  //       // this._storage.set(newIndex,[[curKey, curValue]]);
  //       // } else {
  //       // var found = false;
  //       // for (var m = 0; m < newBucket.length; m ++) {
  //       //   if (newBucket[m][0] === curKey) {
  //       //         newBucket[m][1] = curValue;
  //       //         found = true;
  //       //       }
  //       //     }
  //       //     if (!found) {
  //       //       newBucket.push([curKey, curValue]);

  //       //     }


  //       //   }
  //     }
  //   // }
  // });

  // for (var oldIndex in _oldStorage) {
  //   if (Number(oldIndex)) {
  //     var bucket = _oldStorage[oldIndex];
  //     if (bucket) {
  //       for (var j = 0; j < bucket.length; j++) {
  //         var curTuple = bucket[j];
  //         var curKey = curTuple[0];
  //         var curValue = curTuple[1];
  //         //get the new hash index;
  //         var newIndex = getIndexBelowMaxForKey(curKey, this._limit);
  //         // similar method as insert to reassign the tuple to the new hashtable
  //         var newBucket = this._storage[newIndex];
  //         if (!newBucket) {
  //           this._storage[newIndex] = [[curKey, curValue]];
  //         } else {
  //           var found = false;
  //           for (var m = 0; m < newBucket.length; m ++) {
  //             if (newBucket[m][0] === curKey) {
  //               newBucket[m][1] = curValue;
  //               found = true;
  //             }
  //           }
  //           if (!found) {
  //             newBucket.push([curKey, curValue]);

  //           }


  //         }

  //       }
  //     }

};

/*
 * Complexity: What is the time complexity of the above functions?
insert: O(1);
removed: O(1);
retrieve: O(1);
 */


