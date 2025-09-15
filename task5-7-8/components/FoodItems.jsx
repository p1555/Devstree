import Item from "./Item";

const FoodItems = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <Item
          key={item}
          food={item}
          handlebutton={() => console.log(`${item} being clicked`)}
        />
      ))}
    </ul>
  );
};

export default FoodItems;
