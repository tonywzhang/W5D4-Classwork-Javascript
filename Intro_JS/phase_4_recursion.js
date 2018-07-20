const range = function (start, end) {
  if (start === end) {
    return [end];
  }
  let result = range(start+1,end);
  result.unshift(start);
  return result;
};

console.log(range(1,5));

const sumRec = function(arr) {
  if (arr.length === 1){
    return arr[0];
  }

  let num = arr.pop();
  return num + sumRec(arr);
};

console.log(sumRec([1,2,3,4,5]));

// const exponent = function(base,exp){
//   if (exp === 0){
//     return 1;
//   }
// 
//   return base * exponent(base,exp-1); 
// };

const exponent = function(base,exp){
  if (exp === 0) {
    return 1;
  }
  if (exp === 1) {
    return base;
  }

  if (exp%2 === 0){
    return Math.pow(exponent(base,exp/2),2);
  } else {
    return base * Math.pow(exponent(base,(exp-1)/2),2);
  }

};

console.log(exponent(2,5));

const fibonacci = function(num) {

  if (num === 0){
    return [];
  }  
  if (num === 1){
    return [1];
  }  
  if (num <= 2){
    return [1,1];
  }
  let prev_fib = fibonacci(num-1);
  prev_fib.push(prev_fib[prev_fib.length-1]+prev_fib[prev_fib.length-2]);
  return prev_fib;
};

console.log(fibonacci(10));

const deepDup = function(arr){
  let copy = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])){
      copy.push(deepDup(arr[i]));
    } else {
      copy.push(arr[i]);
    }
  }
  return copy;
};

console.log(deepDup([1,2,[1,2,3,4,4],4,5]));

const bsearch = function(arr, target){
  // console.log(arr);
  if (arr.length === 0){
    return -1;
  }
  let mid_idx = Math.floor(arr.length/2);
  // console.log(mid_idx);
  // console.log(arr[mid_idx]);
  if (arr[mid_idx] === target){
    return mid_idx;
  } else if ( target < arr[mid_idx]) {
    // console.log('left');
    let result = bsearch(arr.slice(0,mid_idx),target);
    return result;
  } else {
    // console.log('right');
    let result = bsearch(arr.slice(mid_idx+1,-1),target);
    if (result === -1){
      return -1;
    }
    return (result+1+Math.floor(arr.length/2));
  }
};

console.log(bsearch([1,2,3,4,5,6,7,8,9,10], -3));

const merge_sort = function(arr){
  
}












