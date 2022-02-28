import React, { Component, state } from "react";

let num = 0;

export default class Details extends React.Component {
  state = {
    count: 10,
    name: "Moshe"
  };

  data = 12;

  render() {
    return (
      <div>
        <hr />
        {this.state.name} Counter:{this.state.count}
        <button
          onClick={() => {
            //num = num + 1;
            this.setState({ count: this.state.count + 1 });
          }}
        >
          +
        </button>
        <br />
        <input
          placeholder="new name"
          onChange={(e) => {
            console.log(e);
            this.setState({ name: e.target.value });
          }}
        />
        <hr />
      </div>
    );
  }
}
