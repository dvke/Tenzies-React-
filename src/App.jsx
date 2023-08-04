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

  return (
    <>
      <main>
        <div className="dice-container">{diceElements}</div>
      </main>
    </>
  );
}

export default App;
