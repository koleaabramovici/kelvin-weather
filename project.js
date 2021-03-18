const kelvin = 294; //Assigned a value to kelvin.

const celsius = kelvin - 273; //Assigned the value of celsius.

let fahrenheit = celsius * (9/5) + 32; //Assigned the value of fahrenheit by multiplying celsius.
fahrenheit = Math.floor(fahrenheit);
//Rounded down the fahrenheit.

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
