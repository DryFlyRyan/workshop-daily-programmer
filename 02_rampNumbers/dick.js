//ramp numbers n stuff

var digits = prompt("input some numbers");
var array = [];

   
function ramper(array) 
{
    
    for(var a=0; a<array.length-1; a++)
        {
            if( Number(array[a]) > Number(array[a+1]) )
             {   
                 return false;
             }
        }
        return true;
}

console.log("The entered number is a ramp number? " + ramper(digits) );
 

   