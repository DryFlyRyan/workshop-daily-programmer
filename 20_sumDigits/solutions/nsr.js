function sumDigits(number){
  var n = number.toString().split('');
  var ans = n.map(function(current, index,array){
    return Number(current);
  })

  console.log(ans);

  if(ans.length < 2){
    return n[0];
  }

  else{
    var o = ans.reduce(function(previousValue,currentValue){
      return previousValue+currentValue;
    })
    return sumDigits(o);
  }
}

console.log(sumDigits(2345));
