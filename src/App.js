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
  return (
    <>
      <h1>Widgets App</h1>
      <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      />
      <Search />
    </>
  );
}
