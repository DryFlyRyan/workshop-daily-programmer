function sumDigitsMaths(value) {
  value = Math.abs(value);
  var sum = 0;
  while(value > 0) {
    sum += value % 10;
    value = Math.floor(value / 10);

    if(value == 0 && sum > 9) {
      value = sum;
      sum = 0;
    }
  }

  return sum;
}

function sumDigits(value) {
  value = Math.abs(value);
  var sum =  value.toString().split('').reduce(function(sum, current) {
    return sum + Number(current);
  }, 0);

  if(sum.toString().length > 1) {
    return sumDigits(sum);
  } else {
    return sum;
  }
}

console.log(sumDigits(12))
console.log(sumDigits(12345))
console.log(sumDigits(667))

console.log(sumDigitsMaths(12))
console.log(sumDigitsMaths(12345))
console.log(sumDigitsMaths(667))
