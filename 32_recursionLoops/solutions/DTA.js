/* Created by David Adams February 29 2016 */
fizzBuzz(process.argv[2])
function fizzBuzz(num) {
  if (num === 1) {
    console.log(1);
    return
  }
  if (num % 3 === 0 && num % 5 === 0) {
    console.log('Fizz Buzz');
  } else if (num % 3 === 0) {
    console.log('Fizz');
  } else if (num % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(num);
  }
  fizzBuzz(num - 1);
}
