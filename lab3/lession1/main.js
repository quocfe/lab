const multiply = ((num1, num2) => num1 * num2);

const toCelsius = ((fahrenheit) => (5/9) * (fahrenheit - 32))

const padZeros = ((num, totallen) => {
  let numStr = num.toString();
  let numZeros = totallen - numStr.length;

  for (let i = 1; i <= numZeros; i++) {
    numStr = "0" + numStr;
  }

  return numStr;
})

const power = ((base, exponent)=> {
  let result = 1;

  for (let i = 0; i < exponent; i++) {
    result *= base;
  }

  return result
})


const greet = ((who) => console.log(`Who ${who}`))
