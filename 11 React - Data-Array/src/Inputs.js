import React from "react";

export default class Inputs extends React.Component {
  jsInputs = [
    { type: "text", val: "123", placeholder: "Please Insert" },
    { type: "text", val: "tttt", placeholder: "Please Insert" },
    { type: "number", val: "222", placeholder: "Please Insert item price" },
    { type: "number", val: "200000", placeholder: "Please Insert car price" },
    { type: "color", val: "", placeholder: "Please Insert car Color" }
  ];

  render() {
    let template = (
      <div>
        {" "}
        Inputs
        {this.jsInputs.map(function (x) {
          console.log(x);

          return <input type={x.type} placeholder={x.placeholder} />;
        })}
      </div>
    );
    return template;
  }
}
