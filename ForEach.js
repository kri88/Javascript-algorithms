
'use strict';

Array.prototype.map = function(projectionFunction) {
  var results = [];
  this.forEach(function(itemInArray) {
    results.push(projectionFunction(itemInArray));

  });

  return results;
};

console.log([1, 2, 3].map(i => i * i)); // [1, 4, 9]