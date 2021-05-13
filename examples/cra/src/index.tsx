import React from "react";
import ReactDOM from "react-dom";
import { meaningOfLife } from "@vishalk/foo";
import { Button } from "@vishalk/components";

ReactDOM.render(
  <React.StrictMode>
    {meaningOfLife}
    <Button />
  </React.StrictMode>,
  document.getElementById("root")
);
