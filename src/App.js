import React, { useState } from "react";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

export default function App() {
  const options = [
    { label: "The color Red", value: "red" },
    { label: "The color Green", value: "green" },
    { label: "The color Blue", value: "blue" },
    { label: "The color Orange", value: "orange" },
    { label: "The color Black", value: "black" },
    { label: "The color Purple", value: "purple" },
  ];
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div>
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null}
    </div>
  );
}
