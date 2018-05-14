import React from 'react';
import ReactDOM from 'react-dom';
import ResponseMessage from './ResponseMessage';
// Define props to pass for tests
const default_props = {calculation: '', response: 'invalid'}
const valid_props = {calculation: '987.65', response: 'correct'}
const empty_props = {calculation: '', response: ''}

it('renders without crashing with default props', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ResponseMessage {...default_props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing with valid props', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ResponseMessage {...valid_props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing with empty props', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ResponseMessage {...empty_props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

