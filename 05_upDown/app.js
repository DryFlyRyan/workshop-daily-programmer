
function upDown(array) {
  var resultsArray = [];
  for (var i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1]) {
      resultsArray.push('up');
    } else if (array[i] < array[i - 1]) {
      resultsArray.push('down');
    } else {
      resultsArray.push('even')
    }
  }
  return resultsArray;
}

console.log(upDown([6,3,5,4,3,4,4,5]))
