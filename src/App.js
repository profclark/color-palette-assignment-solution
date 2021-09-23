import React, { useState } from "react";
import Palette from "./components/Palette";
import generateRandomColor from "./utils/generateRandomColor";
import { nanoid } from "nanoid";

const generateStartingList = () => {
  let list = [];
  for (let i = 0; i < 5; i++) {
    list.push({
      id: nanoid(),
      color: generateRandomColor(),
      selected: false,
    });
  }
  return list;
};

export default function App() {
  const [colorList, setColorList] = useState(generateStartingList());

  const handleGeneratePallete = () => {
    const revisedList = colorList.map((item) => {
      if (!item.selected) {
        return { id: nanoid(), color: generateRandomColor(), selected: false };
      }
      return item;
    });

    setColorList(revisedList);
  };

  const handleColorSelected = (id) => {
    const revisedList = colorList.map((item) => {
      if (item.id === id) {
        return { ...item, selected: !item.selected };
      }
      return item;
    });

    setColorList(revisedList);
  };

  const handleClear = () => {
    const revisedList = colorList.map((item) => {
      if (item.selected) {
        return { ...item, selected: false };
      }
      return item;
    });

    setColorList(revisedList);
  };
  return (
    <main>
      <header>
        <h1>Color Palette Generator</h1>
      </header>
      <Palette colors={colorList} onColorSelected={handleColorSelected} />
      <div className="actions-container">
        <button
          onClick={handleGeneratePallete}
          disabled={
            colorList.filter((item) => item.selected).length ===
            colorList.length
          }
        >
          Generate Colors
        </button>
        <button
          onClick={handleClear}
          disabled={colorList.filter((item) => item.selected).length === 0}
        >
          Clear Selection
        </button>
      </div>
    </main>
  );
}
