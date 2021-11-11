import { useState, useEffect, Fragment } from "react";
import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
  console.log("Rendered.");

  const [num, setNum] = useState(0);
  const [numnum, setNumNum] = useState(0);

  const onClickButton = () => {
    setNum(num + 1);
  };

  const onClickButton2 = () => {
    setNumNum((numnum) => numnum + 1);
  };

  return (
    <Fragment>
      <ColoredMessage color="blue">
        <div id="customized">
          <h1 style={{ color: "red" }}>HELL</h1>
          <p color="blue">Props by Children</p>
          <p>plain</p>
          <button onClick={onClickButton}>GO</button>
          <p>{num}</p>
          <button onClick={onClickButton2}>GO</button>
          <p>{numnum}</p>
        </div>
      </ColoredMessage>
    </Fragment>
  );
};
