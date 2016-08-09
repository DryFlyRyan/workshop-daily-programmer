angular
  .module('app', [])
  .controller('DotsController', DotsController)

function DotsController($scope) {
  var width = 29
  var height = 36
  var matrix = []
  for (var y=0; y<height; y++) {
    var row = []
    for (var x=0; x<width; x++) {
      row.push('id-' + x+y)
    }
    matrix.push(row)
  }
  $scope.matrix = matrix
}
