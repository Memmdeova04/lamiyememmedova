import React, { useState } from "react";
import './App.css';

function App() {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const number = Math.random();
    setRandomNumber(number);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={generateRandomNumber} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Random Number
      </button>
      {randomNumber !== null && (
        <p style={{ fontSize: "18px", marginTop: "20px" }}>
        {randomNumber.toFixed(8)}
        </p>
      )}
    </div>
  );
}

export default App;