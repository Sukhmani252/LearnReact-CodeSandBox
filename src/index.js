// const { createElement } = require("react");
var React = require("react");
var ReactDOM = require("react-dom");

// ReactDOM.render(<div>
//   <h1>Hello World!</h1>
//   <p>This is a paragraph</p>
//   </div>
//   , document.getElementById("root"));

//HTML elements are picked by Babel compiler and then converted into javascript
//Babel is inside react component

// var h1 = document.createElement("h1");
// h1.innerHTML = "This is JSX";
// document.getElementById("root").appendChild(h1);

const fname = "Mani";
const lname = "Arora";

ReactDOM.render(
  <h1>
    Hello {fname} {`${lname}`}!
  </h1>,
  document.getElementById("root")
);
//We can write any javascript expression(something which evaluate to an value) inside {}, but we cannot write
//statements like if statement
