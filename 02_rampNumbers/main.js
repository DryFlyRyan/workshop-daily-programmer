function rampNumberCheck(number) {
    var isRampNumber = true;
    for (var i = 0; i < number.length - 1; i++) {
        if ((Number(number[i]) + 1 === Number(number[i + 1]) || (Number(number[i]) - 1) === Number(number[i + 1])) && isRampNumber === true) {
            isRampNumber = true;
            console.log("true");
        } else {
            isRampNumber = false;
            console.log("false");
        }
    }
    return isRampNumber
}

var number = prompt("Please enter number");

console.log(rampNumberCheck(number));
