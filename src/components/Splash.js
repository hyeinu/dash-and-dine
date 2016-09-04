import React, { Component } from 'react';

export default class Splash extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="text-center">Dash and Dine</h1>
          <p><a className="btn btn-primary btn-lg" role="button">Submit</a></p>
        </div>
      </div>
    );
  }
}
