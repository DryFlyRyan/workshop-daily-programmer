function translate(input) {
  switch(input % 5 == 0) {
    case true:
      return (input % 3 == 0) ? 'FizzBuzz' : 'Buzz';
    default:
      return (input % 3 == 0) ? 'Fizz' : input;
  }
}

function fizzBuzz(start, stop) {
  var array = arguments[2] || [];
  if (start == stop) {
    return array.concat(translate(start));
  } else {
    return array.concat(translate(start)).concat(fizzBuzz(start + 1, stop, array));
  }
}

console.log(fizzBuzz(1, 15));
