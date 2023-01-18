import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading";
import Emojies from "./Emojieslist";
import Display from "./Data";

function ChechDisplay(Emojies) {
  return (
    <Display
      Name={Emojies.Name}
      Comment={Emojies.Comment}
      Content={Emojies.Content}
    />
  );
}

function App() {
  return (
    <div>
      <Heading />
      {Emojies.map(ChechDisplay)}
    </div>
  );
}
export default App;
