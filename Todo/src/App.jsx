import { useState } from "react";
import "./App.css";
import AddTodo from "./Components/add";
import AppName from "./Components/appname";
import Todocontainer from "./Components/todocontainer";
import Welcome from "./Components/welcome";

function App() {
  const [todoitem, settodoitem] = useState([]);
  const addnew = (name, date) => {
    console.log(`item added ${name} Date:${date}`);
    const newtodo = [...todoitem, { name: name, date: date }];
    settodoitem(newtodo);
  };

  const handledelete = (todoname) => {
    const newtodo = todoitem.filter((iteam) => iteam.name !== todoname);
    settodoitem(newtodo);
    //console.log(`delete ${todoname}`)
  };
  return (
    <>
      <div className="p-4">
        <AppName></AppName>
        <AddTodo addnew={addnew}></AddTodo>
        {todoitem.length === 0 && <Welcome></Welcome>}
        <Todocontainer
          todoitem={todoitem}
          onDelete={handledelete}
        ></Todocontainer>
      </div>
    </>
  );
}

export default App;
