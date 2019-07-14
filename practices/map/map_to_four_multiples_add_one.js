'use strict';
var map_to_four_multiples_add_one = function(collection){
 return collection.map((vaule)=>{
    return vaule * 4 + 1;
  });
};

module.exports = map_to_four_multiples_add_one;