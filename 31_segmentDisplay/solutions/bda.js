function sevenSegment(string) {
  var decimals = string.split('.')[1] || '';
  var rounded = Math.floor(Number(string));
  var integer = addCommas(String(rounded));
  var string = integer + (decimals ? '.' + decimals : '');
  return [0,1,2].map(function(line) {
    return string.split('').reduce(function(concatenated, digit) {
      if (concatenated) concatenated += ' ';
      return concatenated + numbers[digit][line];
    }, '');
  }).join('\n');
}

var numbers = {
  '0': [' _ ', '| |', '|_|'],
  '1': ['   ', '  |', '  |'],
  '2': [' _ ', ' _|', '|_ '],
  '3': [' _ ', ' _|', ' _|'],
  '4': ['   ', '|_|', '  |'],
  '5': [' _ ', '|_ ', ' _|'],
  '6': [' _ ', '|_ ', '|_|'],
  '7': [' _ ', '  |', '  |'],
  '8': [' _ ', '|_|', '|_|'],
  '9': [' _ ', '|_|', ' _|'],
  '.': [' ', ' ', '.'],
  ',': [' ', ' ', ',']
};

function addCommas(string) {
  var array = string.split('');
  var digits = 0, commas = [];
  while (array.length) {
    commas.unshift(array.pop());
    if (++digits == 3) {
      digits = 0;
      commas.unshift(',');
    }
  }
  return commas.join('');
}

var input = process.argv[2];
console.log(sevenSegment(input));
