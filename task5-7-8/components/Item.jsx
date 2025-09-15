import styles from "./Item.module.css";

const Item = ({ food, handlebutton }) => {
  // const handlebutton=(event) =>{

  //   console.log(`${food} being clicked`)
  //   console.log(event)
  // }
  return (
    <li className={styles["kg-item"]}>
      <span className="kg-span">{food}</span>
      <button className={styles.button} onClick={handlebutton}>
        OK
      </button>
    </li>
  );
};

export default Item;
