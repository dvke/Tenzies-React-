import Die from "./components/Die";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [dice, setDice] = useState(allNewDice()); //set array of random # as default state

  // return array of random # between 1 - 10
  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.floor(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }
    return newDice;
  }

  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  // return Die component based on dice state
  const diceElements = dice.map((die) => {
    return (
      <Die
        value={die.value}
        key={die.id}
        isHeld={die.isHeld}
        onClick={() => holdDice(die.id)}
      />
    );
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
        {/* render dice  */}
        <div className="dice-container">{diceElements}</div>
        <button onClick={RollDice} className="roll-btn">
          Roll
        </button>
      </main>
    </>
  );
}

export default App;
