import { useState } from "react";

export default function AddTodo({ addnew }) {
  const [todoname, settodoname] = useState("");
  const [tododate, settododate] = useState("");

  const handlename = (event) => {
    //  console.log(event.target.value);
    settodoname(event.target.value);
  };
  const handledate = (event) => {
    //  console.log(event.target.value);
    settododate(event.target.value);
  };

  const handleaddbutton=()=>{
      addnew(todoname,tododate)
      settododate('')
      settodoname('')
  }
  return (
    <div className="grid grid-cols-3 gap-x-0.5 mb-3 place-items-center sm: grid-rows-3 gap-1">

      <div>
        <input
          type="text"
          onChange={handlename}
          placeholder="Enter the task" value={todoname}
          className="border-2 border-solid p-2 rounded-xl"
        />
      </div>

      <div>
        <input
          type="date" value={tododate}
          onChange={handledate}
          className="border-2 border-solid p-2 w-full rounded-xl"
        />
      </div>

      <div>
        <button
          className="cursor-pointer text-center mt-0.5 bg-sky-500 hover:bg-sky-700 text-white px-9 py-2 rounded-2xl"
          onClick={handleaddbutton}
        >
          Add
        </button>
      </div>
    </div>
  );
}
