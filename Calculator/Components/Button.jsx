import styles from "./Button.module.css";
const Button = ({ onButtonClick }) => {
  const bname = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonContainer}>
      {bname.map((bname) => (
        <button className={styles.button} onClick={() => onButtonClick(bname)}>
          {bname}
        </button>
      ))}
    </div>
  );
};
export default Button;
