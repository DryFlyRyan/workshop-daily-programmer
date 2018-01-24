function getDimensions(matrix) {
  return `${matrix.length} x ${matrix[0].length}`
}

function rotateRight(matrix) {
  // setup new array with correct number of rows
  const rotated = [];
  for (let i = 0; i < matrix[0].length; i++) {
    rotated[i] = [];
  }

  // put each number from the array in a new array
  matrix.forEach((arr, index) => {
    arr.forEach((num, index) => {
      rotated[index].unshift(num);
    })
  })

  return rotated;
}

const matrix = [[1, 64, 23],
                [22, 50, 2]];


const matrix1 = [[1,2,3]]

console.log(getDimensions(matrix)); // 2 x 3
console.log(rotateRight(matrix));
// rotated should return:
// [[22, 1],
//  [50, 64],
//  [2, 23]]
console.log(getDimensions(rotateRight(matrix))); // 3 x 2
