import { useState } from "react";
import LeWord from "./components/LeWord";
import Footer from "./components/Footer";
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
    <div className="relative flex h-screen flex-col content-center justify-around bg-black/50 text-center text-white">
      <h1 className="text-laker-purple pt-12 text-5xl font-bold drop-shadow-lg">
        LeBronifier
      </h1>
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
          className="mr-3 w-56 rounded bg-white p-2 text-black"
        />
        <button
          onClick={() => handleLeword()}
          className="bg-laker-purple text-laker-gold rounded-md p-3 transition-all duration-100 ease-in hover:bg-purple-950"
        >
          <FaCrown className="text-xl" />
        </button>
      </div>
      <LeWord text={leword} />
      <Footer />
    </div>
  );
}

export default App;
