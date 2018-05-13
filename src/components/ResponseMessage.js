import React from 'react';
import { 
  Header,
  Message
} from 'semantic-ui-react'

class ResponseMessage extends React.Component {
  render() {
    let color = this.props.color
    let header = this.props.header
    let content = ''
    let icon = ''
    if (color === 'red') {
      content = `This conversion is incorrect. The expected Converted Temperature is ${this.props.color}`
      icon = 'remove'
    } else if (color === 'green' ) {
      content = 'The temperature was converted correctly.'
      icon = 'checkmark'
    } else {
      content = 'Enter a value for all four fields and make sure that Starting Unit and Converted Unit are not the same.'
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