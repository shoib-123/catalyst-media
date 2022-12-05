import React from "react";
import ReactDOM from "react-dom";

function Loader() {
  return ReactDOM.createPortal(
    <div className="modal">
      <h1>Loading...</h1>
    </div>,
    document.getElementById("root")
  );
}

export default Loader;
