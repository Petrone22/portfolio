import "./App.css";
import React, { useState } from "react";
import Intro from "./components/intro";
function App() {
  const [display, setDisplay] = useState(true);
  console.log(display);
  return (
    <div
      className="main"
      onKeyDown={() => {
        setDisplay((prevDisp) => !prevDisp);
      }}
    >
      <Intro display={display} setDisplay={setDisplay} />
    </div>
  );
}

export default App;
