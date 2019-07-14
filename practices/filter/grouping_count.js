'use strict';

function grouping_count(collection) {
  return collection.reduce((pre,value)=>{
          pre[value] = (pre[value] + 1)||1;
          return pre;
  },{})
}

module.exports = grouping_count;
