import React from "react";
import ColorCard from "./ColorCard";

export default function Palette(props) {
  const colorCardList = props.colors.map((color) => (
    <ColorCard
      id={color.id}
      key={color.id}
      color={color.color}
      selected={color.selected}
      onColorSelected={(id) => props.onColorSelected(id)}
    />
  ));

  return <ul className="palette">{colorCardList}</ul>;
}
