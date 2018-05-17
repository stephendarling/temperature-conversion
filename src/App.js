import React, { Component } from 'react';
import './App.css';
// Imports styled components from Semantic-UI-React library
import { 
  Container,
  Header,
  Input,
  Form,
  Dropdown,
  List
} from 'semantic-ui-react'
// Imports response message component
import ResponseMessage from './components/ResponseMessage'
// Imports conversion function
import performConversion from './functions/performConversion'
// Imports options array from data directory
var options = require('./data/options.json')

class App extends Component {
  // Sets initial state
  constructor(props) {
    super(props);
    this.state = {
      startingValue: '',
      startingUnit: '',
      convertedValue: '',
      convertedUnit: '',
      response: '',
      calculation: ''
    };
    // Allows access to state in class using this.state
    this.handleInput = this.handleInput.bind(this);
    this.checkSuccess = this.checkSuccess.bind(this)
  }
  // Updates state with INPUT value and runs checkSuccess for function after state is updated
  async handleInput(event) {
    let change = {}
    change[event.target.name] = event.target.value
    await this.setState(change)
    this.checkSuccess()
  }
  // Updates state with SELECT value and runs checkSuccess for function after state is updated
  async handleSelect(event, data) {
    let change = {}
    change[data.name] = data.value
    await this.setState(change)
    this.checkSuccess()
  }
  // Runs the function performConversion and returns correct, incorrect or invalid
  checkSuccess() {
    let newState = {}
    if (this.state.startingValue.length < 1 && this.state.startingUnit.length < 1 && this.state.convertedValue.length < 1 && this.state.convertedUnit.length < 1) {
      newState['response'] = ''
      this.setState(newState)
    } else {
      let response = performConversion(this.state.startingValue, this.state.startingUnit, this.state.convertedValue, this.state.convertedUnit) 
      newState['response'] = response.status
      newState['calculation'] = response.calculation
      // Updates state with response from conversion and correct calculation
      this.setState(newState)
    }
  }

  render() {
    let headerText = "Temperature Conversion Grading Tool (Travis-Test)"
    let bodyText = "Enter values below to verify if a student's conversion is correct"
    return (
    <Container text className="body">
      <Header as='h2'>{headerText}</Header>
      <p>{bodyText}</p>
      {/* Input form */}
      <Form>
        <Form.Group widths='equal'>
          <Form.Field control={Input} onChange={this.handleInput.bind(this)} name="startingValue" label='Input Temperature' placeholder='Heat/Temperature' />
          <Form.Field control={Dropdown} search selection onChange={this.handleSelect.bind(this)} name="startingUnit" label='Input Unit' options={options} placeholder='Unit' />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Field control={Dropdown} search selection onChange={this.handleSelect.bind(this)} name="convertedUnit" label='Target Unit' options={options} placeholder='Unit' />
          <Form.Field control={Input} onChange={this.handleInput.bind(this)} name="convertedValue" label='Student Response' placeholder='Heat/Temperature' />
        </Form.Group>
      </Form>
      {/* Renders the response message telling the user if the inputs are correct, incorrect or invalid
          State is passed to the ResponseMessage component as props */}
      <ResponseMessage 
        calculation={this.state.calculation}
        response={this.state.response} 
        />
      <Header as='h3'>Form requirements</Header>
      <List bulleted>
        <List.Item>All four fields are required</List.Item>
        <List.Item><b>Input Temperature</b> must be numeric</List.Item>
        <List.Item><b>Input Unit</b> and <b>Target Unit</b> cannot be the same</List.Item>
      </List>
    </Container>
    );
  }
}

export default App;
