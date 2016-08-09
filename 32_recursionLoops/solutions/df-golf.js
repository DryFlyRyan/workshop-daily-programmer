l=console.log
f=n=>{n!=1?f(n-1):l(),n%15==0?l("FizzBuzz"):n%3==0?l("Fizz"):n%5==0?l("Buzz"):l(n)}
f(15)
