import Button from "./components/Button";
import React, { useState } from "react";
import eightball from "./assets/eight-ball.png";

function App() {
  const [negativeCount, setNegativeCount] = useState(0);
  const [positiveCount, setPositiveCount] = useState(0);

  let positiveRoundCount = () => {
    setPositiveCount(positiveCount + 1);
    // console.log(positiveCount + 1);
  };
  let negativeRoundCount = () => {
    setNegativeCount(negativeCount - 1);
  };
  let resetRoundCount = () => {
    setNegativeCount(0);
    setPositiveCount(0);
  };

  var existingPoints = true;

  return (
    existingPoints && (
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
              <div className='chip'>
                <h2>{negativeCount + positiveCount}</h2>
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
    )
  );
}

export default App;
