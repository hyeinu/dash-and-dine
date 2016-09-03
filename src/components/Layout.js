import React, { Component } from 'react';
import { RaisedButton } from 'material-ui';

export default class Layout extends Component {
  render() {
    return (
      <div className="container">
        {/* <RaisedButton label="Whatever" primary /> */}
        {this.props.children}
      </div>
    );
  }
}
