import React from "react";

export default function ColorCard(props) {
  return (
    <li className="color-card">
      <div className="color-box" style={{ backgroundColor: props.color }}></div>
      <p className="color-value">
        <input
          type="checkbox"
          checked={props.selected}
          onChange={() => props.onColorSelected(props.id)}
        />
        <label>{props.color}</label>
      </p>
    </li>
  );
}
