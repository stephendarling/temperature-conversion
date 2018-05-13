// Imports all twelve temperature conversion functions
import * as conversion from './temperatureConversion'
// Takes the four input values and determines if the user's conversion is correct, incorrect 
// or invalid
function performConversion(startingValue, startingUnit, convertedValue, convertedUnit) {
  // Returns invalid unless all four variables are passed and not null
  if (startingValue && startingUnit && convertedValue && convertedUnit) {
    if (startingUnit === convertedUnit) {
      return { status: 'invalid', calculation: null }
    }
    // For each of the 12 possible converstions the function returns either correct or incorrect based
    // on whether the user's input matches the calculated function output. Uses the value method of the 
    // option to determine starting and target unit (e.g. c = celsius, r = rankine, etc.)
    else {
      // Celsius conversions
      if (startingUnit === 'c' && convertedUnit === 'r') {
        return conversion.celsiusToRankine(startingValue,convertedValue)
      }
      else if (startingUnit === 'c' && convertedUnit === 'f') {
        return conversion.celsiusToFahrenheit(startingValue,convertedValue)
      }
      else if (startingUnit === 'c' && convertedUnit === 'k') {
        return conversion.celsiusToKelvin(startingValue,convertedValue)
      }
      // Rankine conversions
      else if (startingUnit === 'r' && convertedUnit === 'c') {
        return conversion.rankineToCelsius(startingValue,convertedValue)
      }
      else if (startingUnit === 'r' && convertedUnit === 'f') {
        return conversion.rankineToFahrenheit(startingValue,convertedValue)
      }
      else if (startingUnit === 'r' && convertedUnit === 'k') {
        return conversion.rankineToKelvin(startingValue,convertedValue)
      }
      // Fahrenheit conversions
      else if (startingUnit === 'f' && convertedUnit === 'c') {
        return conversion.fahrenheitToCelsius(startingValue,convertedValue)
      }
      else if (startingUnit === 'f' && convertedUnit === 'k') {
        return conversion.fahrenheitToKelvin(startingValue,convertedValue)
      }
      else if (startingUnit === 'f' && convertedUnit === 'r') {
        return conversion.fahrenheitToRankine(startingValue,convertedValue)
      }
      // Kelvin conversions
      else if (startingUnit === 'k' && convertedUnit === 'c') {
        return conversion.kelvinToCelsius(startingValue,convertedValue)
      }
      else if (startingUnit === 'k' && convertedUnit === 'f') {
        return conversion.kelvinToFahrenheit(startingValue,convertedValue)
      }
      else if (startingUnit === 'k' && convertedUnit === 'r') {
        return conversion.kelvinToRankine(startingValue,convertedValue)
      }
    }
  }
  // For anything not falling into the above category return invalid
  else {
    return { status: 'invalid', calculation: null}
  }
}

export default performConversion