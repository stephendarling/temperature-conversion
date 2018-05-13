import React from 'react';
import { Message } from 'semantic-ui-react'
import * as utilities from '../functions/utilities'

class ResponseMessage extends React.Component {
  // Sets local state to props
  constructor(props) {
    super(props);
    this.state = this.props;
  }
  // Updates local state when new props are recieved which forces a re-render
  componentWillReceiveProps(nextProps){
    this.setState(nextProps)
  }
  render() {
    // Sets local variables from state
    let response = this.state.response
    let header = utilities.capitalizeFirstLetter(response)
    let calculation = this.state.calculation
    let content = ''
    let icon = ''
    let color = ''
    // Determines the icon and content variables depending on the local variable color
    if (response === 'incorrect') {
      color = 'red'
      content = `This conversion is incorrect. The expected converted temperature is ${calculation}.`
      icon = 'remove'
    } else if (response === 'correct' ) {
      color = 'green'
      content = 'The temperature was converted correctly.'
      icon = 'checkmark'
    } else {
      color = 'yellow'
      content = 'All fields are required. Note that the Input Unit and Target Unit cannot be the same and the Input Temperature must be valid.'
      icon = 'warning sign'
    }
    return (
      <Message
        icon={icon}
        color={color}
        header={header}
        content={content}
      />
    );
  }
}

export default ResponseMessage;