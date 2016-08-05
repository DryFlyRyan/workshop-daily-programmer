//# Up Down
//
//Given an array of numbers, write a program that describes whether each number was higher, lower or even to the previous number.
//
//## Input
//
//An array of numbers (e.g [6,3,5,4,3,4,4,5])
//
//## Output
//
//An array of up down strings (e.g. ["down","up","down","down","up","even","up"])


function upDown(number) {
    number = number.split("");
    var upDownArr = [];
    number.forEach(function (element, index, array) {
        if (index != array.length - 1) {
            if (Number(element) > Number(array[index + 1])) {
                upDownArr.push("down");

            } else if (Number(element) < Number(array[index + 1])) {
                upDownArr.push("up");
            } else {
                upDownArr.push("even");
            }
        }
    });

    return upDownArr;
}

var number = prompt("Please enter a number.");

console.log(upDown(number));
