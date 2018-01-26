function add(number) {
  return function (number2) {
    return number + number2;
  }
}

console.log(add(1)(1));   // returns 2
console.log(add(20)(20)); // returns 40
console.log(add(100)(5)); // returns 105
console.log(add(40)(2)); // returns 42
