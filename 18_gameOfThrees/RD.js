
function gameOfThrees(number) {
  lastNumber = number;
  var operator;
  if (number === 1) {
    console.log(1);
    console.log('');
    return
  }
  if (number % 3 === 0){
    operator = 0;
    console.log(number, operator);
    number = number / 3;
    gameOfThrees(number);
  } else {
    if ((number + 1) % 3 === 0) {
      operator = Math.sign(1)
      console.log(number, operator);
      number = (number + 1) / 3;
      gameOfThrees(number)
    } else {
      operator = Math.sign(-1);
      console.log(number, operator);
      number = (number - 1) / 3;
      gameOfThrees(number)
    }
  }
}


gameOfThrees(100)
gameOfThrees(244)
gameOfThrees(12395873)
gameOfThrees(8675309)
