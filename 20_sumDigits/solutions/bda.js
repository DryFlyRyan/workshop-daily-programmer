function sumDigits(number) {
  do {
    var string = String(number);
    var digits = string.split('');
    number = 0;
    for (var i = 0; i < digits.length; i++) {
      number += Number(digits[i]);
    }
  } while(string.length > 1);
  return number;
}

console.log(sumDigits(3));
console.log(sumDigits(12345));
console.log(sumDigits(667));
