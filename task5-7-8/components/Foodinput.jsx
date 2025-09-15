import styles from "./Foodinput.module.css";
const FoodInput = (props) => {
//   const handlechange = (event) => {
//     console.log(event.target.value);
//   };
  return (
    <input
      type="text"
      className={styles.display}
      placeholder="enter food name"
      onChange={props.handlechange}
    />
  );
};
export default FoodInput;
