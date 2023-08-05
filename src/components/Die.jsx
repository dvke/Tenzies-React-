/* eslint-disable react/prop-types */
const Die = (props) => {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };
  return (
    <div className={"die"} style={styles}>
      <h1>{props.value}</h1>
    </div>
  );
};

export default Die;
