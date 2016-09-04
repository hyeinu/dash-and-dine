import React, { Component } from 'react';
import AutoComplete from './AutoComplete'
export default class Splash extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="text-center">Dine and Dash</h1>
          <p><a className="btn btn-primary btn-lg" role="button">Learn more</a></p>
          <AutoComplete />
        </div>
      </div>
    );
  }
}
