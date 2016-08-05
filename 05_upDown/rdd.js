//new

var someArray = [6,3,5,4,3,4,4,5];

var resultsArray = [];

function updown( a, b ) {
    
    if(Number(a) > Number(b))
        return "down";
    else if( Number(a) < Number(b))
        return "up";
    else
        return "even";
    
}

var i =0;
while(i<someArray.length-1)
    {
        resultsArray.push(updown(someArray[i], someArray[i+1]));
        i++;
    }

console.log(someArray, resultsArray);