function zipArrays(array1, array2) {
  var length;
  var results = [];
  if (array1.length > array2.length ? length = array1.length : length = array2.length)
  for (var i = 0; i < length; i ++) {
    if (array1[i]) {
      results.push(array1[i])
    }
    if (array2[i]) {
      results.push(array2[i]);
    }
  }
  return results
}

console.log(zipArrays([1,2,3], [4,5,6]));
console.log(zipArrays([1,2,3], [4,5,6,7,8]));
