const prompt = require('prompt-sync')()

// let fahrenheit = prompt('Enter temp in fahrenheit: ')

// function toCelsius(fahrenheit) {
//   console.log((((fahrenheit - 32) * 5) / 9));
// }

// toCelsius(fahrenheit);


let celcius = prompt('Enter temp in celcius: ')

function toFahrenheit(fahrenheit) {
  console.log((celcius *9/5)+32 );
}

toFahrenheit(celcius);
