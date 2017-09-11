// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var rangeArray = [];
var range = function(x, y) {
  rangeArray.push(x+1); // rangeArray = [3]
  console.log(x);
  console.log(rangeArray);
  if (x+1 !== y) {
    return range(x+1, y);
  }
  return rangeArray;
};
console.log(range(2,8)); // [3,4,5,6,7,8]