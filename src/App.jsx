import Die from "./components/Die";
import { useState } from "react";

function App() {
  const [dice, setDice] = useState(allNewDice());

  function allNewDice() {
    const randomArr = [];
    for (let i = 0; i < 10; i++) {
      randomArr.push(Math.floor(Math.random() * 6));
    }
    return randomArr;
  }

  const diceElements = dice.map((die, index) => {
    return <Die value={die} key={index} />;
  });

  function RollDice() {
    setDice(allNewDice());
  }

  return (
    <>
      <main>
        <div className="description">
          <h1>Tenzies</h1>
          <p>
            Roll until all dice are the same. Click each die to freeze it at its
            current value between rolls.
          </p>
        </div>
        <div className="dice-container">{diceElements}</div>
        <button onClick={RollDice} className="roll-btn">
          Roll
        </button>
      </main>
    </>
  );
}

export default App;
