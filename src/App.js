import Button from "./components/Button";
import React, { useState, useEffect } from "react";
import eightball from "./assets/eight-ball.png";

function App() {
  const [negativeCount, setNegativeCount] = useState(0);
  const [positiveCount, setPositiveCount] = useState(0);
  let totalCount = positiveCount + negativeCount;
  let total = "";

  if ((!totalCount === 0) & (totalCount % 5 === 0)) {
    console.log("divisible");
    total = "black";
  }

  useEffect(() => {
    const posLocalStorage = window.localStorage.getItem("POSITIVE_SCORE");
    if (posLocalStorage !== null) setPositiveCount(JSON.parse(posLocalStorage));
  }, []);

  useEffect(() => {
    const negLocalStorage = window.localStorage.getItem("NEGATIVE_SCORE");
    if (negLocalStorage !== null) setNegativeCount(JSON.parse(negLocalStorage));
  }, []);

  let positiveRoundCount = () => {
    setPositiveCount(positiveCount + 1);

    window.localStorage.setItem(
      "POSITIVE_SCORE",
      JSON.stringify(positiveCount + 1)
    );
  };

  let negativeRoundCount = () => {
    setNegativeCount(negativeCount - 1);

    window.localStorage.setItem(
      "NEGATIVE_SCORE",
      JSON.stringify(negativeCount - 1)
    );
  };

  let resetRoundCount = () => {
    setNegativeCount(0);
    setPositiveCount(0);
    window.localStorage.removeItem("POSITIVE_SCORE");
    window.localStorage.removeItem("NEGATIVE_SCORE");
  };

  return (
    <div className='app'>
      <div className='table-border'>
        <div className='title-section'>
          <div>
            <h1>Straight Pool Counter</h1>
            <p>For the 21st Century</p>
          </div>
        </div>
        <div className='body-section'>
          <div className='total-score'>
            <div className={"chip " + total}>
              <h2>{totalCount}</h2>
            </div>
            <p>Total:</p>
          </div>
          <div className='score-section'>
            <div className='score-category'>
              <Button title={"-"} action={negativeRoundCount} />
              <p>Down: {negativeCount}</p>
            </div>
            <div className='score-category'>
              <Button title={"+"} action={positiveRoundCount} />
              <p>Up: {positiveCount}</p>
            </div>
          </div>
        </div>
        <button onClick={resetRoundCount} className='options-container'>
          <img className='eightball' src={eightball} alt='8 ball settting' />
        </button>
      </div>
    </div>
  );
}

export default App;
