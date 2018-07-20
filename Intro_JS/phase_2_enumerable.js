Array.prototype.myEach = function(myCallback) {
  for(let i = 0; i< this.length; i++){
    myCallback(this[i]);
  }
};

const myCallback = function(el){
  console.log(el);
};

[1,2,3].myEach(myCallback);

// Array.prototype.myMap = function (myCallback) {
//   let new_arr = [];
//   for(let i = 0; i< this.length; i++){
//     new_arr.push(myCallback(this[i]));
//   }
//   return new_arr;
// };

const myCallback2 = function(el) {
  return el + 1;
};


Array.prototype.myMap = function(callback) {
  let result = [];
  this.myEach(
    (el) => {
      result.push(callback(el));
    }
  );
  return result;
};

console.log([1,2,3,3].myMap(myCallback2));

Array.prototype.myReduce = function(myCallback3, initialValue) {
  let copy = this.slice(0,this.length);
  let result = initialValue;
  if (!initialValue) {
    result = copy.shift();
  }
  copy.myEach(
    (el) => {
      result = myCallback3(result,el);
    }
  );
  return result;
};


let a = [1, 2, 3].myReduce(function(acc, el) {
  return acc + el;
});
console.log(a);





