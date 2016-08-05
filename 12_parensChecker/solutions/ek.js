var input1 = "()(((())))";
var input2 = "())))(";
var input3 = ")(";

function parensChecker(parens){
  var opens = 0;
  var closes = 0;
  var result;

  for (var i = 0; i < parens.length; i++) {
    if (parens[i] === '(') {
      opens++;
    } else if (parens[i] === ')') {
      closes++;
    }

    if (parens[0] === '(' && parens[parens.length -1] === ')' && opens === closes){
      result = 'yup';
    } else {
      result = 'nope';
    }
  }
  console.log(result);
}

parensChecker(input1);
parensChecker(input2);
parensChecker(input3);
