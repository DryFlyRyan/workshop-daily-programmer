// var result = '';
function fizzBuzz(start, end, result){
  var result = result || '';
  if(start === end + 1){
    return result;
  }else{
    if(start % 3 === 0 && start % 5 === 0){
      result += 'FizzBuzz';
    }else if( start % 3 === 0){
      result += 'Fizz';
    }else if (start % 5 === 0){
      result += 'Buzz';
    }else{
      result += start;
    }
    if(start < end){
      result += ', '
    }
    return fizzBuzz(start + 1, end, result);
  }
}

console.log(fizzBuzz(1, 15));
