import React, { Component } from 'react';
import './App.css';
import { 
  Container,
  Header,
  Input,
  Select,
  Form
} from 'semantic-ui-react'
import ResponseMessage from './components/ResponseMessage'

// Creates array of options for drop-down values
const options = [
  { text: 'Kelvin', value: 'k' },
  { text: 'Celsius', value: 'c' },
  { text: 'Fahrenheit', value: 'f' },
  { text: 'Rankine', value: 'r' }, 
]

class App extends Component {
  // Sets initial state
  constructor(props) {
    super(props);
    this.state = {
      startingValue: null,
      startingUnit: null,
      convertedValue: null,
      convertedUnit: null,
      responseColor: 'yellow',
      response: 'Invalid'
    };
    // Allows access to state through class with this.state
    this.handleInput = this.handleInput.bind(this);
    this.checkSuccess = this.checkSuccess.bind(this)
  }
  // Runs the function performConversion and returns correct, incorrect or invalid
  checkSuccess() {
    let newState = {}
    let response = this.performConversion(this.state.startingValue, this.state.startingUnit, this.state.convertedValue, this.state.convertedUnit) 
    if (response === 'correct') {
      newState['response'] = 'Correct'
      newState['responseColor'] = 'green'
      this.setState(newState)
    }
    else if (response === 'incorrect') {
      newState['response'] = 'Incorrect'
      newState['responseColor'] = 'red',
      this.setState(newState)
    } 
    else if (response === 'invalid') {
      newState['response'] = 'Invalid'
      newState['responseColor'] = 'yellow'
      this.setState(newState)
    }
  }
  // Takes the four input values and determines if the user's conversion is correct, incorrect 
  // or invalid
  performConversion(sv, su, cv, cu) {
    let celsius_value = ''
    let calculation = ''
    // Returns invalid unless all four variables are passed and not null
    if (sv && su && cv && cu) {
      if (su === cu) {
        return 'invalid'
      }
      // For each of the 12 possible converstions the function returns either correct or incorrect based
      // on whether the user's input matches the calculated function output
      else {
        if (su === 'c' && cu === 'r') {
          calculation = this.celciusToRankine(sv)
          if (Number(cv).toFixed(1) === calculation) { return 'correct' } else { return 'incorrect' }
        }
        else if (su === 'r' && cu === 'c') {
          calculation = this.rankineToCelcius(sv)
          if (Number(cv).toFixed === calculation) { return 'correct' } else { return 'incorrect' }
        }
        else if (su === 'c' && cu === 'f') {
          calculation = this.celciusToFahrenheit(sv)
          if (Number(cv).toFixed(1) === calculation) { return 'correct' } else { return 'incorrect' }
        }
        else if (su === 'f' && cu === 'c') {
          calculation = this.fahrenheitToCelcius(sv)
          if (Number(cv).toFixed(1) === calculation) { return 'correct' } else { return 'incorrect' }
        }
        else if (su === 'c' && cu === 'k') {
          calculation = this.celciusToKelvin(sv)
          if (Number(cv).toFixed(1) === calculation) { return 'correct' } else { return 'incorrect' }
        }
        else if (su === 'k' && cu === 'c') {
          calculation = this.kelvinToCelcius(sv)
          if (Number(cv).toFixed(1) === calculation) { return 'correct' } else { return 'incorrect' }
        }
        else if (su === 'r' && cu === 'f') {
          calculation = this.rankineToFahrenheit(sv)
          if (Number(cv).toFixed(1) === calculation) { return 'correct' } else { return 'incorrect' }
        }
        else if (su === 'r' && cu === 'k') {
          calculation = this.rankineToKelvin(sv)
          if (Number(cv).toFixed(1) === calculation) { return 'correct' } else { return 'incorrect' }
        }
        else if (su === 'f' && cu === 'r') {
          calculation = this.fahrenheitToRankine(sv)
          if (Number(cv).toFixed(1) === calculation) { return 'correct' } else { return 'incorrect' }
        }
        else if (su === 'k' && cu === 'f') {
          calculation = this.kelvinToFahrenheit(sv)
          if (Number(cv).toFixed(1) === calculation) { return 'correct' } else { return 'incorrect' }
        }
        else if (su === 'k' && cu === 'r') {
          calculation = this.kelvinToRankine(sv)
          if (Number(cv).toFixed(1) === calculation) { return 'correct' } else { return 'incorrect' }
        }
      }
    }
    else {
      return 'invalid'
    }
  }

  // The 12 functions below perform the calculation from a given unit to another given unit. Conversion
  // units are in the function name
  celciusToRankine(value) {
    let rankine = ((Number(value) + 273.15) * 9/5).toFixed(1)
    return rankine
  }
  celciusToFahrenheit(value) {
    let fahrenheit = (Number(value) * 9/5 + 32).toFixed(1)
    return fahrenheit
  }
  celciusToKelvin(value) {
    let kelvin = (Number(value) + 273.15).toFixed(1)
    return kelvin
  }
  rankineToCelcius(value) {
    let celcius = ((Number(value) - 491.67) * 5/9).toFixed(1)
    return celcius
  }
  rankineToFahrenheit(value) {
    let fahrenheit = (Number(value) - 459.67).toFixed(1)
    return fahrenheit
  }
  rankineToKelvin(value) {
    let kelvin = (Number(value) * 5/9).toFixed(1)
    return kelvin
  }
  fahrenheitToCelcius(value) {
    let celcius = ((Number(value) - 32) * 5/9).toFixed(1)
    return celcius
  }
  fahrenheitToKelvin(value) {
    let kelvin = (Number(value) * 5/9).toFixed(1)
    return kelvin
  }
  fahrenheitToRankine(value) {
    let rankine = (Number(value) + 459.67).toFixed(1)
    return rankine
  }
  kelvinToCelcius(value) {
    let celcius = (Number(value) - 273.15).toFixed(1)
    return celcius
  }
  kelvinToFahrenheit(value) {
    let fahrenheit = (Number(value) * 9/5 - 459.67).toFixed(1)
    return fahrenheit
  }
  kelvinToRankine(value) {
    let rankine = (Number(value) * 9/5).toFixed(1)
    return rankine
  }

  // Updates state with input value and runs checkSuccess for function after state is updated
  async handleInput(event) {
    let change = {}
    change[event.target.name] = event.target.value
    await this.setState(change)
    this.checkSuccess()
  }

  // Updates state with select value and runs checkSuccess for function after state is updated
  async handleSelect(event, data) {
    let change = {}
    change[data.name] = data.value
    await this.setState(change)
    this.checkSuccess()
  }

  render() {
    return (
    <Container text className="body">
      <Header as='h2'>Temperature Conversion Grading Tool</Header>
      <p>Use the below inputs to verify if a student's conversion is correct. </p>
      <Form>
        <Form.Group widths='equal'>
          <Form.Field control={Input} onChange={this.handleInput.bind(this)} name="startingValue" label='Starting Temperature' placeholder='Enter Temperature' />
          <Form.Select onChange={this.handleSelect.bind(this)} name="startingUnit" label='Starting Unit' options={options} placeholder='Unit' />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Field control={Input} onChange={this.handleInput.bind(this)} name="convertedValue" label='Converted Temperature' placeholder='Enter Temperature' />
          <Form.Field control={Select} onChange={this.handleSelect.bind(this)} name="convertedUnit" label='Converted Unit' options={options} placeholder='Unit' />
        </Form.Group>
      </Form>
      {/* Renders the response message telling the user if the inputs are correct, incorrect or invalid
          State is passed to the ResponseMessage component as props */}
      <ResponseMessage 
        icon='inbox'
        color={this.state.responseColor}
        header={this.state.response} />
    </Container>
    );
  }
}

export default App;
