function combineAndSort(arr1, arr2) {
  return [... arr1,... arr2].sort();
};

const array1 = [ "cat", "dog", "fish", "zebra" ]
const array2 = [ "lion", "aardvark", "gorilla" ];
console.log(combineAndSort(array1, array2));
