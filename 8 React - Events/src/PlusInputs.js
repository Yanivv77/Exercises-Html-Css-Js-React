import React, { Component, state } from "react";

export default class PlusNumbers extends React.Component {
  state = {
    num1: 0,
    num2: 0
  };

  render() {
    return (
      <div>
        <div>Result:{Number(this.state.num1) + Number(this.state.num2)}</div>
        <input
          type="number"
          value={this.state.num1}
          onChange={(eve) => {
            this.setState({ num1: eve.target.value });
          }}
        />
        <input
          type="number"
          value={this.state.num2}
          onChange={(eve) => {
            this.setState({ num2: eve.target.value });
          }}
        />
      </div>
    );
  }
}
