import { useState, useRef, useCallback, useEffect } from "react";

// Counter

// function App() {
//   //  const [count, setCount] = useState(0);
//   let refe = useRef(10);

//   function handleClick() {
//     // setCount(count + 1);
//     refe.current = refe.current + 1;
//     //sconsole.log(refe.current)
//     // console.log(useRef);
//     alert("You clicked" + refe.current + "times!");
//   }
//   return (
//     <>
//       <button
//         onClick={handleClick}
//         className="text-center align-center flex justify-center  p-3 border-2 border-solid rounded-xl cursor-pointer"
//       >
//         Click me!
//       </button>

//       <p>Current count: {refe.current}</p>

//     </>
//   );
// }
// export default App;

//Stop Watch

// export default function App() {
//   const [time, setTime] = useState(0);
//   let timeRef = useRef(null);
//   function start() {
//     timeRef.current=setInterval(() => {
//       setTime((time) => time + 1);
//     }, 1000);
//   }

//   function stop() {
//     clearInterval(timeRef.current);
//     timeRef.current = null;
//   }

//   function reset() {
//     stop();
//     setTime(0);
//   }
//   return (
//     <div>
//       <h1 className="text-center items-center justify-center">
//         Time passed: {time} seconds
//       </h1>
//       <div className="mt-5 flex flex-row gap-3">
//         <button
//           onClick={start}
//           className="text-center align-center  justify-center  p-3 border-2 border-solid rounded-xl cursor-pointer"
//         >
//           Start
//         </button>
//         <button
//           onClick={stop}
//           className="text-center align-center justify-center  p-3 border-2 border-solid rounded-xl cursor-pointer"
//         >
//           Stop
//         </button>
//         <button
//           onClick={reset}
//           className="text-center align-center justify-center  p-3 border-2 border-solid rounded-xl cursor-pointer"
//         >
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// }


// Image Scrolling


// export default function CatFriends() {
//   const listRef = useRef(null);

//   function scrollToIndex(index) {
//     const listNode = listRef.current;
//     const imgNode = listNode.querySelectorAll('li > img')[index];
//     imgNode.scrollIntoView({
//       behavior: 'smooth',
//       block: 'nearest',
//       inline: 'center'
//     });
//   }

//   return (
//     <div className="p-4 space-y-4">
//       <nav className="flex gap-4 justify-center">
//         <button onClick={() => scrollToIndex(0)} className="px-4 py-2 bg-blue-500 text-white rounded">Neo</button>
//         <button onClick={() => scrollToIndex(1)} className="px-4 py-2 bg-blue-500 text-white rounded">Millie</button>
//         <button onClick={() => scrollToIndex(2)} className="px-4 py-2 bg-blue-500 text-white rounded">Bella</button>
//       </nav>
//       <div className="overflow-x-auto">
//         <ul
//           ref={listRef}
//           className="flex gap-4 w-max"
//         >
//           <li className="flex-shrink-0">
//             <img
//               src="https://placecats.com/neo/300/200"
//               alt="Neo"
//               className="rounded"
//             />
//           </li>
//           <li className="flex-shrink-0">
//             <img
//                src="https://placecats.com/millie/200/200"
//               alt="Millie"
//               className="rounded"
//             />
//           </li>
//           <li className="flex-shrink-0">
//             <img
//              src="https://placecats.com/bella/199/200"
//               alt="Bella"
//               className="rounded"
//             />
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }
