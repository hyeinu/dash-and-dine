import React, { Component } from 'react';

export default class Layout extends Component {
  render() {
    return (
      <div className="container" style={{ height: '100%'}}>
        {this.props.children}
      </div>
    );
  }
}
