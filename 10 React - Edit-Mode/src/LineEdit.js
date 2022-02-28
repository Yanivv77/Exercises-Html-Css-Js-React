import React, { Component } from "react";

export default class LineEdit extends React.Component {
  state = {
    txtVal: "",
    editMode: 1
  };

  render() {
    let inputDisabled = <div>{this.state.txtVal}</div>;

    let inputRegular = (
      <input
        placeholder="Insert Text "
        value={this.state.txtVal}
        onChange={(event) => {
          this.setState({ txtVal: event.target.value });
        }}
      />
    );

    let template = (
      <div>
        <button
          onClick={() => {
            this.setState({ editMode: 1 });
          }}
        >
          Edit Mode
        </button>

        <button
          onClick={() => {
            this.setState({ editMode: 0 });
          }}
        >
          Updtae
        </button>
        {this.state.editMode === 1 ? inputRegular : inputDisabled}

        <div></div>
      </div>
    );
    return template;
  }
}
