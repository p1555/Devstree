//import "./App.css";
import { useState } from "react";
import styles from "./App.module.css";
import Button from "./Components/Button";
import Display from "./Components/Display";

// Optional Fast Refresh logic — only if needed
// if (import.meta.hot) {
//   window.$RefreshSig$ = window.$RefreshSig$ || function () {};
// }
function App() {
  const [calval, setcalval] = useState("");
  const onButtonClick = (buttonText) => {
    // console.log(buttonText);
    if (buttonText === "C") {
      setcalval("");
    } else if (buttonText === "=") {
      const result = eval(calval);
      setcalval(result);
    } else {
      const newdisplay = calval + buttonText;
      setcalval(newdisplay);
    }
  };
  return (
    <div className={styles.calc}>
      <Display displayvalue={calval}></Display>
      <Button onButtonClick={onButtonClick}></Button>
    </div>
  );
}

export default App;