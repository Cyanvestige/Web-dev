import React from "react";
import ReactDOM from "react-dom";

const listStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "solid black 10px",
};

function Items() {
  return (
    <div style={listStyle}>
      <div className="item">
        <input type="checkbox"></input>
        <p>Place Holder</p>
      </div>
      <div className="item">
        <input type="checkbox"></input>
        <p>Place Holder</p>
      </div>
      <div className="item">
        <input type="checkbox"></input>
        <p>Place Holder</p>
      </div>
      <div className="item">
        <input type="checkbox"></input>
        <p>Place Holder</p>
      </div>
    </div>
  );
}
export default Items;
