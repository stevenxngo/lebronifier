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
      <h1 className="text-laker-purple pt-12 text-5xl font-bold drop-shadow-lg">
        LeBronifier
      </h1>
      <div className="flex translate-y-24 flex-row justify-center md:translate-y-32 lg:translate-y-48">
        <input
          type="text"
          name="word"
          placeholder="Enter a word"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleLeword();
            }
          }}
          className="mr-3 w-56 rounded bg-white p-2 text-black"
        />
        <button
          onClick={() => handleLeword()}
          className="bg-laker-purple text-laker-gold rounded-md p-3 transition-all duration-100 ease-in hover:bg-purple-950"
        >
          <FaCrown className="text-xl" />
        </button>
      </div>
      {leword && (
        <div className="translate-y-32 text-2xl font-semibold md:translate-y-40 lg:translate-y-56">
          {leword}
        </div>
      )}
    </div>
  );
}

export default App;
