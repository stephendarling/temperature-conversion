import React, { Component } from 'react';
import './App.css';
import { 
  Container,
  Header,
  Input,
  Select,
  Form,
  Message
} from 'semantic-ui-react'

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
      newState['responseColor'] = 'red'
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
    // Returns invalid unless all four variables are passed and not null
    if (sv && su && cv && cu) {
      return 'correct'
    }
    else {
      return 'invalid'
    }
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
      <Message color={this.state.responseColor}>
        <Message.Header className="App">{this.state.response}</Message.Header>
      </Message>
    </Container>
    );
  }
}

export default App;
