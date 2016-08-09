function findGreater (input, num) {
  input = input.sort();
  var result;
  input.map(function(elem, index) {
    if (elem > num) {
      result = input.splice(index)
    }
  })
  return result;
}

console.log(findGreater([1,2,3,4,5,6,7,8], 5));
