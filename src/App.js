import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { 
  Container,
  Header,
  Input,
  Select,
  Button,
  Form
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
      startingValue: '',
      startingUnit: '',
      convertedValue: '',
      convertedUnit: '',
      isSuccess: ''
    };

    // Allows access to state through class with this.state
    this.handleInput = this.handleInput.bind(this);
    this.checkSuccess = this.checkSuccess.bind(this)
  }

  checkSuccess() {
    if(this.state.startingUnit === 'k') {
      console.log('Success')
    } 
    else {
      console.log('Failure')
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
      <p>
        {this.state.isSuccess}
      </p>
    </Container>
    );
  }
}

export default App;
