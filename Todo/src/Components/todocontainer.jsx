import Iteam from "./todoitem";
export default function TodoContainer({ todoitem, onDelete }) {
  return (
    <>
      {todoitem.map((item) => (
        <Iteam
          tododate={item.date}
          todoname={item.name}
          onDelete={onDelete}
        ></Iteam>
      ))}
    </>
  );
}
