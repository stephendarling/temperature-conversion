import convert from './convert'
// Defines bad parameters and expected responses for tests
// Correct parameters
const params = ['10','c','50','f']
const response = {status: 'correct', calculation: '50.00'}
// Bad conversion
const params_conversion = ['10','c','60','f']
const response_conversion = {status: 'incorrect', calculation: '50.00'}
// Missing parameters
const params_missing_1 = ['10','c','60']
const params_missing_2 = ['10','c']
const params_missing_3 = ['10']
const params_missing_4 = []
const response_missing = {status: 'invalid', calculation: ''}
// Letter in startingValue parameter
const params_letters = ['987.g','c','78','f']
const response_letters = {status: 'invalid', calculation: ''}
// Letter in convertedValue parameter
const params_letters_converted = ['10','c','a','f']
const response_letters_converted = {status: 'incorrect', calculation: '50.00'}

describe('The conversion functions', () => {
  test('return success and proper conversion with correct parameters', () => {
    expect(convert(...params)).toEqual(response);
  });
  test('to return the proper conversion when the student is incorrect', () => {
    expect(convert(...params_conversion)).toEqual(response_conversion);
  });
  test('to return invalid with one missing parameter', () => {
    expect(convert(...params_missing_1)).toEqual(response_missing);
  });
  test('to return invalid with two missing parameters', () => {
    expect(convert(...params_missing_2)).toEqual(response_missing);
  });
  test('to return invalid with three missing parameters', () => {
    expect(convert(...params_missing_3)).toEqual(response_missing);
  });
  test('to return invalid with four missing parameters', () => {
    expect(convert(...params_missing_4)).toEqual(response_missing);
  });
  test('to return invalid if letters are used in the starting value', () => {
    expect(convert(...params_letters)).toEqual(response_letters);
  });
  test('to return incorrect if letters are used in the converted value', () => {
    expect(convert(...params_letters_converted)).toEqual(response_letters_converted);
  });
});