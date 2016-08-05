function sumDigits(input) {
  var array = input.toString().split('')
  var sum = reduceArray(array);

  if (sum > 9) {
    return sumDigits(sum)
  }
  return sum;
}

function reduceArray(array) {
  return array.reduce(function(a,b) {
    return parseInt(a) + parseInt(b);
  })
}

// sumDigits(12345)

console.log(sumDigits(12345));
console.log(sumDigits(667));
console.log(sumDigits(12));
