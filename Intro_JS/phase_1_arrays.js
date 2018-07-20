Array.prototype.uniq = function() {
  let new_arr = [];
  for(let i=0; i<this.length;i++){
      if (! new_arr.includes(this[i])) {
        new_arr.push(this[i]);
      }
    }
    return new_arr;
};

console.log([1,2,4,4].uniq());

// 
// let uniq = function(array) {
//   let new_arr = [];
//   for(let i=0; i < array.length; i++){
//     if (! new_arr.includes(array[i])) {
//       new_arr.push(array[i]);
//     }
//   }
//   return new_arr;
// };

// 
// console.log(uniq([1,2,3,3]));

Array.prototype.twoSum = function() {
  let new_arr = [];
  for(let i = 0; i<this.length-1; i++){
    for(let j = i+1 ; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        new_arr.push([i,j]);
      }
    }
  }
  return new_arr;
};

console.log([-1,1,2,-2].twoSum());

Array.prototype.transpose = function() {
  let new_arr = [];
  for(let col = 0; col < this[0].length; col++){
    let row_arr = [];
    for(let row = 0; row < this.length; row++){
      row_arr.push(this[row][col]);
    }
    new_arr.push(row_arr);
  }
  return new_arr;
};


console.log([[1,2],[3,4],[5,6]].transpose());