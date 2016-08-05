
// Daily Programmer 05 - Up Down
////////////////////////////////////////////

inputArray = [1,1,5,7,3,4,9,1,0];
upDownArray = [];


function upDown(array){
  var upDown;

  for(var i = 0; i<array.length -1; i++){
    if(array[i] > array[i+1]){
      upDown = "down";
    }else if(array[i] < array[i+1]){
      upDown = "up";
    }else{
      upDown = "same";
    }
    upDownArray.push(upDown);
  }
  return upDownArray;
}

console.log(upDown(inputArray));
