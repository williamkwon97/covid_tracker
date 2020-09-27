import React from "react";
import ReactDOM from "react-dom";
import CardComponent from "./Card";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CardComponent></CardComponent>, div);
});
