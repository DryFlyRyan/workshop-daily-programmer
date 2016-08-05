function rampNumberCheck(number) {
    var isRampNumber = true;
    var asc = false;
    for (var i = 0; i < number.length - 1; i++) {
        if (Number(number[i]) + 1 === Number(number[i + 1]) && isRampNumber === true) {
            isRampNumber = true;
            asc = true;
        } else if ((Number(number[i]) - 1) === Number(number[i + 1]) && isRampNumber === true) {
            isRampNumber = true;
            if (asc === true) {
                isRampNumber = false;
            }
        } else {
            isRampNumber = false;
        }
    }
    return isRampNumber;
}

var number = prompt("Please enter number");

console.log(rampNumberCheck(number));
