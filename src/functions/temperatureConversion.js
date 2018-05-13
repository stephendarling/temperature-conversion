// The 12 functions below perform the calculation from a given unit to another given unit. Conversion
// units are in the function name

// Checks if calculation is the same as the value that was passed. Returns calculation and correct
// or incorrect depending on the outcome
function compareConversion(calculation,value) {
  if (Number(value).toFixed(1) === calculation) {
    return ({ status: 'correct', calculation})
  } else {
    return ({ status: 'incorrect', calculation})
  }
}
// Celsius conversions
export function celsiusToRankine(value) {
  let calculation = ((Number(value) + 273.15) * 9/5).toFixed(1)
  return compareConversion(calculation,value)
}
export function celsiusToFahrenheit(value) {
  let calculation = (Number(value) * 9/5 + 32).toFixed(1)
  return compareConversion(calculation,value)
}
export function celsiusToKelvin(value) {
  let calculation = (Number(value) + 273.15).toFixed(1)
  return compareConversion(calculation,value)
}
// Rankine conversions
export function rankineToCelsius(value) {
  let calculation = ((Number(value) - 491.67) * 5/9).toFixed(1)
  return compareConversion(calculation,value)
}
export function rankineToFahrenheit(value) {
  let calculation = (Number(value) - 459.67).toFixed(1)
  return compareConversion(calculation,value)
}
export function rankineToKelvin(value) {
  let calculation = (Number(value) * 5/9).toFixed(1)
  return compareConversion(calculation,value)
}
// Fahrenheit conversions
export function fahrenheitToCelsius(value) {
  let calculation = ((Number(value) - 32) * 5/9).toFixed(1)
  return compareConversion(calculation,value)
}
export function fahrenheitToKelvin(value) {
  let calculation = (Number(value) * 5/9).toFixed(1)
  return compareConversion(calculation,value)
}
export function fahrenheitToRankine(value) {
  let calculation = (Number(value) + 459.67).toFixed(1)
  return compareConversion(calculation,value)
}
// Kelvin conversions
export function kelvinToCelsius(value) {
  let calculation = (Number(value) - 273.15).toFixed(1)
  return compareConversion(calculation,value)
}
export function kelvinToFahrenheit(value) {
  let calculation = (Number(value) * 9/5 - 459.67).toFixed(1)
  return compareConversion(calculation,value)
}
export function kelvinToRankine(value) {
  let calculation = (Number(value) * 9/5).toFixed(1)
  return compareConversion(calculation,value)
}

 