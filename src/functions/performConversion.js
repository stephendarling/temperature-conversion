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
        calculation = conversion.celsiusToRankine(sv)
        if (Number(cv).toFixed(1) === calculation) { return { status: 'correct', calculation} } else { return { status: 'incorrect', calculation } }
      }
      else if (su === 'c' && cu === 'f') {
        calculation = conversion.celsiusToFahrenheit(sv)
        if (Number(cv).toFixed(1) === calculation) { return { status: 'correct', calculation} } else { return { status: 'incorrect', calculation } }
      }
      else if (su === 'c' && cu === 'k') {
        calculation = conversion.celsiusToKelvin(sv)
        if (Number(cv).toFixed(1) === calculation) { return { status: 'correct', calculation} } else { return { status: 'incorrect', calculation } }
      }
      // Rankine conversions
      else if (su === 'r' && cu === 'c') {
        calculation = conversion.rankineToCelsius(sv)
        if (Number(cv).toFixed === calculation) { return { status: 'correct', calculation} } else { return { status: 'incorrect', calculation } }
      }
      else if (su === 'r' && cu === 'f') {
        calculation = conversion.rankineToFahrenheit(sv)
        if (Number(cv).toFixed(1) === calculation) { return { status: 'correct', calculation} } else { return { status: 'incorrect', calculation } }
      }
      else if (su === 'r' && cu === 'k') {
        calculation = conversion.rankineToKelvin(sv)
        if (Number(cv).toFixed(1) === calculation) { return { status: 'correct', calculation} } else { return { status: 'incorrect', calculation } }
      }
      // Fahrenheit conversions
      else if (su === 'f' && cu === 'c') {
        calculation = conversion.fahrenheitToCelsius(sv)
        if (Number(cv).toFixed(1) === calculation) { return { status: 'correct', calculation} } else { return { status: 'incorrect', calculation } }
      }
      else if (su === 'f' && cu === 'k') {
        calculation = conversion.fahrenheitToKelvin(sv)
        if (Number(cv).toFixed(1) === calculation) { return { status: 'correct', calculation} } else { return { status: 'incorrect', calculation } }
      }
      else if (su === 'f' && cu === 'r') {
        calculation = conversion.fahrenheitToRankine(sv)
        if (Number(cv).toFixed(1) === calculation) { return { status: 'correct', calculation} } else { return { status: 'incorrect', calculation } }
      }
      // Kelvin conversions
      else if (su === 'k' && cu === 'c') {
        calculation = conversion.kelvinToCelsius(sv)
        if (Number(cv).toFixed(1) === calculation) { return { status: 'correct', calculation} } else { return { status: 'incorrect', calculation } }
      }
      else if (su === 'k' && cu === 'f') {
        calculation = conversion.kelvinToFahrenheit(sv)
        if (Number(cv).toFixed(1) === calculation) { return { status: 'correct', calculation} } else { return { status: 'incorrect', calculation } }
      }
      else if (su === 'k' && cu === 'r') {
        calculation = conversion.kelvinToRankine(sv)
        if (Number(cv).toFixed(1) === calculation) { return { status: 'correct', calculation} } else { return { status: 'incorrect', calculation } }
      }
    }
  }
  // For anything not falling into the above category return invalid
  else {
    return { status: 'invalid', calculation: null}
  }
}

export default performConversion