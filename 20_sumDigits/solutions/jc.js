function sumDigits(integer){
    var arr = integer.toString().split('');
    var reduced;
    if (arr.length == 1){
        return arr[0];
    }else{
       reduced = arr.reduce(function(prev, curr){
          return parseInt(prev) + parseInt(curr);     
       }); 
       return sumDigits(reduced);
    }
}

console.log(sumDigits(12345));
console.log(sumDigits(667));
