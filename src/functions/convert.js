// Imports the conversionOptions array
var conversionOptions = require('../data/conversionOptions')
// Evaluates a conversion from passed variables (starting temperature and operation)
let performConvert = (t,fx) => eval('(' + Number(t) + fx)
// Takes the four input values and determines if the user's conversion is correct, incorrect 
// or invalid
function convert(startingValue, startingUnit, convertedValue, convertedUnit) {
  // Returns invalid unless all four variables are passed and not null
  if (startingValue && startingUnit && convertedValue && convertedUnit) {
    if (startingUnit === convertedUnit) {
      return { status: 'invalid', calculation: '' }
    }
    // Checks if the startingValue contains any letters
    else if (/[a-z]/i.test(startingValue)) {
      return { status: 'invalid', calculation: '' }
    }
    // Finds the conversion operations from the optionsArray and passes that to 
    // performConvert to evaluate. 
    else {
      let toKelvinFm = conversionOptions.find(data => data.value == startingUnit).tokelvin
      let toKelvin = performConvert(startingValue,toKelvinFm)
      let toUnitFm = conversionOptions.find(data => data.value == convertedUnit).fromkelvin
      let toUnit = performConvert(toKelvin.toString(),toUnitFm)
      let isCorrect = Number(convertedValue).toFixed(0) == Number(toUnit).toFixed(0) ? 'correct' : 'incorrect'
      return (
        {
          status: isCorrect,
          calculation: toUnit.toFixed(2)
        }
      )
    }
  }
  // For anything not falling into the above category return invalid
  else {
    return { status: 'invalid', calculation: ''}
  }
}

export default convert