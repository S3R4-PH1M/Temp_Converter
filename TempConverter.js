// define constants for the temperature scale symbols
const tempKelvinSymbol = ' K';
const tempCelsiusSymbol = ' °C';
const tempFahrenheitSymbol = ' °F';
const tempNewtonSymbol = ' N';


// define value for kelvin temperature values
const tempKelvin = 0;

// define conversion from kelvin to celsius
let tempCelsius = tempKelvin - 273;

// define conversion from celsius to fahrenheit (rounded down)
let tempFahrenheit = Math.floor((tempCelsius * (9 / 5)) + 32 );

// define conversion from celsius to newton (rounded down)
let tempNewton = Math.floor(tempCelsius * (33 / 100));


// log outputs to console
console.log(tempKelvin + tempKelvinSymbol);
console.log(tempCelsius + tempCelsiusSymbol);
console.log(tempFahrenheit + tempFahrenheitSymbol); 
console.log(tempNewton + tempNewtonSymbol); 


// log interpolated outputs to console
console.log(`The temperature is ${tempKelvin} in degrees Kelvin`);
console.log(`The temperature is ${tempCelsius} in degrees Celsius`);
console.log(`The temperature is ${tempFahrenheit} in degrees Fahrenheit`); 
console.log(`The temperature is ${tempNewton} in degrees Newton`); 