//import "./App.css";
import styles from "./App.module.css";
import Button from "./Components/Button";
import Display from "./Components/Display";

// Optional Fast Refresh logic — only if needed
// if (import.meta.hot) {
//   window.$RefreshSig$ = window.$RefreshSig$ || function () {};
// }
function App() {
  return (
    <div className={styles.calc}>
      <Display></Display>
      <Button></Button>
    </div>
  );
}

export default App;
