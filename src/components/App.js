import React, { Component } from 'react';

export default class App extends Component {
  render() {
    console.log('this.state:', this.state);
    return (
      <h1 className="text-center">Welcome to React!</h1>
    );
  }
}
