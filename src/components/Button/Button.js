import React, { Component } from "react";

export default class Button extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      color: props.color ? props.color : ""
    };
  }
  render() {
    const style = {
      color: this.state.color
    };

    return <button style={style}>{this.props.children}</button>;
  }
}
