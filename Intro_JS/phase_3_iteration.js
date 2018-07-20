Array.prototype.bubbleSort = function () {
  let sorted = this.slice(0,this.length);
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length; j++) {
      if (sorted[j] > sorted[j+1]){
        let temp = sorted[j+1];
        sorted[j+1] = sorted[j];
        sorted[j] = temp; 
      }
    }
  }
  return sorted;
};

console.log([3,2,1].bubbleSort());

String.prototype.substrings = function () {
  let substrings = [];
  
  for (var i = 0; i < this.length-1; i++) {
    for (var j = i + 1; j < this.length; j++) {
      let current_sub = this.slice(i,j);
      if (!substrings.includes(current_sub)){
        substrings.push(current_sub);
      }
    }
  }
  return substrings;
};

console.log("HelloWorld".substrings());