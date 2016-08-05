// function garland(input) {
//   input = input.split('');
//   var beginningLast = '';
//   var endLast = '';
//   var beginning = '';
//   var end = '';
//   for (var i = 0; i < input.length; i++) {
//     beginningLast = beginning;
//     endLast = end;
//     beginning = beginning + input[i];
//     end = input[input.length - 1 - i] + end;
//     if (beginning !== end && beginningLast === endLast && beginningLast.length && beginning.length !== input.length) {
//       return beginningLast.length;
//     }
//   }
//   return 0;
// }

function garland(input) {
  var count = 0;
  for (var i = 1; i < input.length; i++) {
    var first = input.substr(0, input.length-i);
    var last = input.substr(i, input.length)
    if (first == last && first.length > count) {
      count = first.length;
    }
  }
  return count;
}


console.log(garland('programmer'));
console.log(garland('ceramic'));
console.log(garland('onion'));
console.log(garland('alfalfa'));
console.log(garland('hotshots'));
console.log(garland('abracadabra'));
console.log(garland('couscous'));
console.log(garland('dd111ddd111'));
