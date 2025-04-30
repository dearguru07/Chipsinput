import { useState } from "react";
import "./styles.css";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [chipsArry, setChipsArry] = useState([]);
  const handleButton = (e) => {
    if (e.key === "Enter" && inputText.trim() !== "") {
      setChipsArry((prev) => [...prev, inputText]);
      setInputText("");
    }
  };
  const handledelete = (index) => {
    const copyChips = [...chipsArry];
    copyChips.splice(index, 1);
    setChipsArry(copyChips);
  };
  return (
    <div className="App">
      <h1>Chips Input</h1>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={(e) => handleButton(e)}
      />
      <div className="flex">
        {chipsArry.map((chip, index) => {
          return (
            <div className="chips" key={chip}>
              {chip}
              <button
                onClick={(e) => {
                  handledelete(e);
                }}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default App;
