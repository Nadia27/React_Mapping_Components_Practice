import React from "react";
import Dictionary from "./Dictionary";
import emojipedia from "../emojipedia";

console.log(emojipedia);

function createDictionary(emoji) {
  return (
    <Dictionary
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(createDictionary)}
    </div>
  );
}

export default App;
