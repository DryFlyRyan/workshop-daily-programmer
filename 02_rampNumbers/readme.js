/*# Ramp Numbers
A ramp number is a number whose digits from left to right either only rise or stay the same. 1234 is a ramp number as is 1124. 1032 is not.

## Input
A positive integer, n.

## Output
true if the input is a ramp number, false if it is not
*/

function rampNumber(number){
   // var ramp = true
    for (x=0; x<number.length; x++){
        if (number[i]>number[i+1]){
            var ramp = false;
            break;
        }
    }
    return ramp;
}

rampNumber(1234)
console.log(ramp)