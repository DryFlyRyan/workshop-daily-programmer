
var array1 = [ "cat", "dog", "fish", "zebra" ],
    array2 = [ "lion", "aardvark", "gorilla" ]

function combineAndSort(array1, array2) {
  array2.forEach(function(val) {
    array1.push(val)
  })
  return array1.sort();
}

console.log(combineAndSort(array1,array2));
