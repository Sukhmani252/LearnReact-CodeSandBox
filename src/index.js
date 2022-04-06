import React from "react";
import ReactDOM from "react-dom";
const today = new Date();
const time = today.getHours();
let greeting;
const customStyle = {
  color: ""
};
if (time < 12) {
  greeting = "Morning";
  customStyle.color = "red";
} else if (time < 18) {
  greeting = "Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Night";
  customStyle.color = "blue";
}
ReactDOM.render(
  <h1 class="heading" style={customStyle}>
    Good {greeting}
  </h1>,
  document.getElementById("root")
);
