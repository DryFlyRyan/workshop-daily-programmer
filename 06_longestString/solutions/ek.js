// Created by Elana Kopelevich

var input = ['truck', 'sidewalk', 'book'];

function longestString(array){
  var longest,
      count,
      lastCount = 0;

  for (var i = 0; i < array.length; i++) {
    count = 0;
    for (var j = 0; j < array[i].length; j++) {
      count++;
    }
    if (count > lastCount) {
      longest = array[i];
      lastCount = count;
    }
  }
  console.log(longest + ': ' + lastCount);
}

longestString(input);
