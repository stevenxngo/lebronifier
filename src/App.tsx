import { useState } from "react";
import { lebronify } from "./logic/algorithm";
import { FaCrown } from "react-icons/fa";
import "./App.css";

function App() {
  const [leword, setLeWord] = useState("");

  const handleLeword = () => {
    console.log("handleLeword");
    const word = (
      document.querySelector('input[name="word"]') as HTMLInputElement
    ).value;
    if (!word) return;
    setLeWord(lebronify(word));
  };

  return (
    <div className="relative flex h-screen flex-col content-center bg-black/50 text-center text-white">
      <h1 className="pt-8 text-5xl font-bold">LeBronifier</h1>
      <div className="flex flex-row justify-center">
        <input
          type="text"
          name="word"
          placeholder="Enter a word"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleLeword();
            }
          }}
          className="mr-2 rounded bg-white p-1 text-black"
        />
        <button
          onClick={() => handleLeword()}
          className="rounded-md bg-purple-700 p-2 text-yellow-400 transition-all duration-100 ease-in hover:bg-purple-800"
        >
          <FaCrown className="text-xl" />
        </button>
      </div>
      {leword && <div className="text-2xl">{leword}</div>}
    </div>
  );
}

export default App;
