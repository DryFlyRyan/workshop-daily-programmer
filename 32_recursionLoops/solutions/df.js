function fizzBuzz (n) {
	if (n !== 1) fizzBuzz(n-1);
	if (n % 15 === 0) console.log("FizzBuzz")
	else if (n % 3 === 0) console.log("Fizz")
	else if (n % 5 === 0) console.log("Buzz")
	else console.log(n)
}

fizzBuzz(15)
