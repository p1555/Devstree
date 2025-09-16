import styles from "./Display.module.css";
const Display = ({ displayvalue }) => {
  return (
    <input
      type="text"
      value={displayvalue}
      className={styles.display}
      readOnly
    />
  );
};
export default Display;
