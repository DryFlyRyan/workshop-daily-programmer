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
