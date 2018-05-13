// Imports all twelve temperature conversion functions
import * as conversion from './temperatureConversion'
// Takes the four input values and determines if the user's conversion is correct, incorrect 
// or invalid
function performConversion(sv, su, cv, cu) {
  let calculation = ''
  // Returns invalid unless all four variables are passed and not null
  if (sv && su && cv && cu) {
    if (su === cu) {
      return { status: 'invalid', calculation: null }
    }
    // For each of the 12 possible converstions the function returns either correct or incorrect based
    // on whether the user's input matches the calculated function output. Uses the value method of the 
    // option to determine starting and target unit (e.g. c = celsius, r = rankine, etc.)
    else {
      // Celsius conversions
      if (su === 'c' && cu === 'r') {
        return conversion.celsiusToRankine(sv,cv)
      }
      else if (su === 'c' && cu === 'f') {
        return conversion.celsiusToFahrenheit(sv)
      }
      else if (su === 'c' && cu === 'k') {
        return conversion.celsiusToKelvin(sv)
      }
      // Rankine conversions
      else if (su === 'r' && cu === 'c') {
        return conversion.rankineToCelsius(sv)
      }
      else if (su === 'r' && cu === 'f') {
        return conversion.rankineToFahrenheit(sv)
      }
      else if (su === 'r' && cu === 'k') {
        return conversion.rankineToKelvin(sv)
      }
      // Fahrenheit conversions
      else if (su === 'f' && cu === 'c') {
        return conversion.fahrenheitToCelsius(sv)
      }
      else if (su === 'f' && cu === 'k') {
        return conversion.fahrenheitToKelvin(sv)
      }
      else if (su === 'f' && cu === 'r') {
        return conversion.fahrenheitToRankine(sv)
      }
      // Kelvin conversions
      else if (su === 'k' && cu === 'c') {
        return conversion.kelvinToCelsius(sv)
      }
      else if (su === 'k' && cu === 'f') {
        return conversion.kelvinToFahrenheit(sv)
      }
      else if (su === 'k' && cu === 'r') {
        return conversion.kelvinToRankine(sv)
      }
    }
  }
  // For anything not falling into the above category return invalid
  else {
    return { status: 'invalid', calculation: null}
  }
}

export default performConversion