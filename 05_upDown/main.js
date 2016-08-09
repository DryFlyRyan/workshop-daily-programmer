// workshop-daily-programmer-master #5 Up Down

var userNumbers = prompt("Enter a series of numbers separated by commas:", "12, 345, 6, 78, 910, 910");
var stringArray = userNumbers.split(',');

function numberParser(stringArray){
    var integerArray = [];
    //console.log(integerArray)
    for (i=0; i<stringArray.length; i++){
    integerArray.push(parseInt(stringArray[i]));
    //console.log(integerArray);
    } //end of for loop
    return integerArray;
} //end of function numberParser
    
console.log(numberParser(stringArray)); //works


function upDown(integerArray){
    var outputArray = [];
    for (i=0; i<(integerArray.length - 1); i++){
        if(integerArray[i+1] > integerArray[i]){
            outputArray.push("up");
        }
        else if(integerArray[i+1] < integerArray[i]){
            outputArray.push("down");
        }
        else if(integerArray[i+1] === integerArray[i]){
            outputArray.push("even");
        }
    } // end of for loop
    return outputArray
} // end of function upDown

console.log(upDown(numberParser(stringArray)));

