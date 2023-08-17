import Die from "./components/Die";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

let numberOfRolls = 0;

function App() {
  const [dice, setDice] = useState(allNewDice()); //set array of random # as default state
  const [tenzies, setTenzies] = useState(false); //determines if game is won

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }
  // return array of random # between 1 - 10
  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
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

  // Start new game after game is won
  function NewGame() {
    setTenzies(false);
    setDice(allNewDice);
  }

  function RollDice() {
    numberOfRolls = numberOfRolls + 1;
    setDice((oldDice) =>
      oldDice.map((die) => {
        //keep held die
        return die.isHeld === true ? die : generateNewDie();
      })
    );
  }
  // React hook to determine when game is won
  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const allsameValue = dice.every((die) => die.value === dice[0].value);
    if (allHeld && allsameValue) {
      setTenzies(true);
    }
  }, [dice]);

  // get time elapsed
  // useEffect(() => {
  //   console.log("started " + startTime);
  //   console.log("ended " + endTime);
  //   console.log((endTime - startTime) / 1000);
  // }, [tenzies]);

  return (
    <>
      {tenzies && <Confetti />}
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
        <h1>Rolls : {numberOfRolls}</h1>
        <button onClick={tenzies ? NewGame : RollDice} className="roll-btn">
          {tenzies ? "New Game" : "Roll"}
        </button>
      </main>
    </>
  );
}

export default App;
