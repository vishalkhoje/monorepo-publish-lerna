import React from "react";
import ReactDOM from "react-dom";
import { meaningOfLife } from "@vishalkhoje/foo";
import { Button } from "@vishalkhoje/components";

ReactDOM.render(
  <React.StrictMode>
    {meaningOfLife}
    <Button />
  </React.StrictMode>,
  document.getElementById("root")
);
