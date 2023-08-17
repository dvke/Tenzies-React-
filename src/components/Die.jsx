/* eslint-disable react/prop-types */
const Die = (props) => {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };
  let dots = props.value;

  //render image based on dots prop
  function renderDots() {
    if (dots === 1) {
      return <img src="./src/assets/dice.png"></img>;
    } else if (dots === 2) {
      return <img src="./src/assets/dice2.png"></img>;
    } else if (dots === 3) {
      return <img src="./src/assets/dice3.png"></img>;
    } else if (dots === 4) {
      return <img src="./src/assets/dice4.png"></img>;
    } else if (dots === 5) {
      return <img src="./src/assets/dice5.png"></img>;
    } else {
      return <img src="./src/assets/dice6.png"></img>;
    }
  }
  return (
    <div className={"die"} style={styles} onClick={props.onClick}>
      {renderDots()}
    </div>
  );
};

export default Die;
