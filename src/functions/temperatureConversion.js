// The 12 functions below perform the calculation from a given unit to another given unit. Conversion
// units are in the function name

// Checks if calculation is the same as the value that was passed. Returns calculation and correct
// or incorrect depending on the outcome
function compareConversion(calculation,convertedValue) {
  if (Number(convertedValue).toFixed(1) === calculation) {
    return ({ status: 'correct', calculation})
  } else {
    return ({ status: 'incorrect', calculation})
  }
}
// Celsius conversions
export function celsiusToRankine(startingValue,convertedValue) {
  let calculation = ((Number(startingValue) + 273.15) * 9/5).toFixed(1)
  return compareConversion(calculation,convertedValue)
}
export function celsiusToFahrenheit(startingValue,convertedValue) {
  let calculation = (Number(startingValue) * 9/5 + 32).toFixed(1)
  return compareConversion(calculation,convertedValue)
}
export function celsiusToKelvin(startingValue,convertedValue) {
  let calculation = (Number(startingValue) + 273.15).toFixed(1)
  return compareConversion(calculation,convertedValue)
}
// Rankine conversions
export function rankineToCelsius(startingValue,convertedValue) {
  let calculation = ((Number(startingValue) - 491.67) * 5/9).toFixed(1)
  return compareConversion(calculation,convertedValue)
}
export function rankineToFahrenheit(startingValue,convertedValue) {
  let calculation = (Number(startingValue) - 459.67).toFixed(1)
  return compareConversion(calculation,convertedValue)
}
export function rankineToKelvin(startingValue,convertedValue) {
  let calculation = (Number(startingValue) * 5/9).toFixed(1)
  return compareConversion(calculation,convertedValue)
}
// Fahrenheit conversions
export function fahrenheitToCelsius(startingValue,convertedValue) {
  let calculation = ((Number(startingValue) - 32) * 5/9).toFixed(1)
  return compareConversion(calculation,convertedValue)
}
export function fahrenheitToKelvin(startingValue,convertedValue) {
  let calculation = (Number(startingValue) * 5/9).toFixed(1)
  return compareConversion(calculation,convertedValue)
}
export function fahrenheitToRankine(startingValue,convertedValue) {
  let calculation = (Number(startingValue) + 459.67).toFixed(1)
  return compareConversion(calculation,convertedValue)
}
// Kelvin conversions
export function kelvinToCelsius(startingValue,convertedValue) {
  let calculation = (Number(startingValue) - 273.15).toFixed(1)
  return compareConversion(calculation,convertedValue)
}
export function kelvinToFahrenheit(startingValue,convertedValue) {
  let calculation = (Number(startingValue) * 9/5 - 459.67).toFixed(1)
  return compareConversion(calculation,convertedValue)
}
export function kelvinToRankine(startingValue,convertedValue) {
  let calculation = (Number(startingValue) * 9/5).toFixed(1)
  return compareConversion(calculation,convertedValue)
}

 