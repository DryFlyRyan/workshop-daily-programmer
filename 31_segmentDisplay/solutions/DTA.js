/* Created by David Adams February 24 2016 */
var numbers = {
  '1': {
    line1: '   ',
    line2: '  |',
    line3: '  |'
  },
  '2': {
    line1: ' __',
    line2: ' _|',
    line3: '|__'
  },
  '3': {
    line1: '__ ',
    line2: '__|',
    line3: '__|'
  },
  '4': {
    line1: '   ',
    line2: '|_|',
    line3: '  |'
  },
  '5': {
    line1: ' _ ',
    line2: '|_ ',
    line3: ' _|'
  },
  '6': {
    line1: ' _ ',
    line2: '|_ ',
    line3: '|_|'
  },
  '7': {
    line1: '__ ',
    line2: '  |',
    line3: '  |'
  },
  '8': {
    line1: ' _ ',
    line2: '|_|',
    line3: '|_|'
  },
  '9': {
    line1: ' _ ',
    line2: '|_|',
    line3: ' _|'
  },
  '0': {
    line1: ' _ ',
    line2: '| |',
    line3: '|_|'
  }
}

function sevenSegment(num) {
  var numList = num.toString().split('')
  var printSevenSegment = {
    line1: '',
    line2: '',
    line3: ''
  }

  for(var i = 0; i < numList.length; i++) {
    printSevenSegment.line1 += numbers[numList[i]].line1 + '  '
    printSevenSegment.line2 += numbers[numList[i]].line2 + '  '
    printSevenSegment.line3 += numbers[numList[i]].line3 + '  '
  }

  var printOutput = ''
  for (var key in printSevenSegment) {
    printOutput += printSevenSegment[key] + '\n'
  }
  return printOutput
}

console.log(sevenSegment(1));
console.log(sevenSegment(87));
console.log(sevenSegment(1234567890));
