'use strict';

function choose_even(collection) {
  // var result = [];
  // for(let i = 0 ; i < collection.length ; i++){
  //   if(collection[i]%2 == 0 ||collection[i] ==0 ){
  //     result.push(collection[i])
  //   }
  // }
  return collection.filter((number) =>{
     return number % 2 == 0 || number == 0;
  });
}

module.exports = choose_even;