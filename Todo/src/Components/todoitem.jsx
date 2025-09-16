export default function Iteam({ todoname, tododate, onDelete }) {
  return (
    <>
      <div className="grid grid-cols-3 gap-x-2 place-items-center mb-5">
        <div className="font-medium">{todoname}</div>
        <div className="text-gray-600">{tododate}</div>
        <div>
          <button
            className="cursor-pointer text-center bg-red-500 hover:bg-red-700 text-white px-7 py-2 rounded-2xl"
            onClick={() => onDelete(todoname)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
