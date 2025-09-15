import React from "react";
import "./App.css";
import FoodItems from "./assets/Components/FoodItems";
import ErrorMessage from "./assets/Components/ErrorMessage";
import Container from "./assets/Components/Container";
import FoodInput from "./assets/Components/Foodinput";
import EventDemo from "./assets/Components/events";

function App() {
  let food = [
    "dalxxxmk",
    "milk",
    "pizza",
    "idli",
    "dosha",
    "mamara",
    "rotli",
    "saak",
    "rice",
  ];
  let text = "food entered by user:";
  const handlechange = (event) => {
    console.log(event.target.value);
    console.log(event.type); // "click"
    console.log(event.nativeEvent);
    text = "event.target.value";
  };
  // let food = []; // Uncomment to test "Still Hungry" message

  return (
    <>
      <Container>
      <EventDemo></EventDemo>
        <h1>Healthy Food</h1>

        <FoodInput handlechange={handlechange}></FoodInput>
        <p>{text}</p>
        <ErrorMessage items={food} />
        <FoodItems items={food} />
      </Container>
      <Container>
        <p>
          Above is the list of healthy food for your health it is very teasy
          breakfast
        </p>
      </Container>
    </>
  );
}

export default App;

//   let food = [];
// let mess;
// if(food.length===0){
//    mess= <p>Hungry</p>
// }
// else{
//    mess=<p>not Hungry</p>
// }

//   return (
//     <React.Fragment>
//       <h1>Food</h1>
//       {mess}
//       {/* {food.length === 0 ? (
//         <p>Hungry</p>
//       ) : (
//         <>
//           <p>Not Hungry</p> */}
//           <ul>
//             {food.map((item) => (
//               <li key={item}>{item}</li>
//              ))
//             }
//           </ul>
//         {/* </>
//       ) */}

//       {/* {food.length > 0 && (
//   <ul>
//     {food.map(item => (
//       <li key={item}>{item}</li>
//     ))}
//   </ul>
// )} */}

//     </React.Fragment>
//   );
