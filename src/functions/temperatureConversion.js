// The 12 functions below perform the calculation from a given unit to another given unit. Conversion
// units are in the function name

// celsius conversions
export function celsiusToRankine(value) {
  let rankine = ((Number(value) + 273.15) * 9/5).toFixed(1)
  return rankine
}
export function celsiusToFahrenheit(value) {
  let fahrenheit = (Number(value) * 9/5 + 32).toFixed(1)
  return fahrenheit
}
export function celsiusToKelvin(value) {
  let kelvin = (Number(value) + 273.15).toFixed(1)
  return kelvin
}
// Rankine conversions
export function rankineToCelsius(value) {
  let celsius = ((Number(value) - 491.67) * 5/9).toFixed(1)
  return celsius
}
export function rankineToFahrenheit(value) {
  let fahrenheit = (Number(value) - 459.67).toFixed(1)
  return fahrenheit
}
export function rankineToKelvin(value) {
  let kelvin = (Number(value) * 5/9).toFixed(1)
  return kelvin
}
// Fahrenheit conversions
export function fahrenheitToCelsius(value) {
  let celsius = ((Number(value) - 32) * 5/9).toFixed(1)
  return celsius
}
export function fahrenheitToKelvin(value) {
  let kelvin = (Number(value) * 5/9).toFixed(1)
  return kelvin
}
export function fahrenheitToRankine(value) {
  let rankine = (Number(value) + 459.67).toFixed(1)
  return rankine
}
// Kelvin conversions
export function kelvinToCelsius(value) {
  let celsius = (Number(value) - 273.15).toFixed(1)
  return celsius
}
export function kelvinToFahrenheit(value) {
  let fahrenheit = (Number(value) * 9/5 - 459.67).toFixed(1)
  return fahrenheit
}
export function kelvinToRankine(value) {
  let rankine = (Number(value) * 9/5).toFixed(1)
  return rankine
}

 