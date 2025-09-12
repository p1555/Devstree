// import KigButton from "./kigbutton";
// import Hello from "./Hello";
// import {Button} from "./button";

// function Header() {
//   return <h1>My Website</h1>;
// }

// function Footer() {
//   return <p>© 2025 All rights reserved</p>;
// }

// function Layout({ children }) {
//   return (
//     <div>
//       <Header />
//       <main>{children}</main>
//       <Footer />
//     </div>
//   );
// }

// function Card({ children }) {
// //  console.log("Card children:", children);
//   return <div className="card">{children}</div>;
// }
// function Profile({ children }) {
//   return <div className="profile">{children}</div>;
// }

// function ExtraInfo({ age }) {
//   return <p>{age} years old</p>;
// }

// function App(){
//   return <div>
//     <h1>Hello</h1>
//     <button>Subscribe</button>

//   <Hello></Hello>
//   <KigButton/>
//    <Button text="Login" onClick={() => console.log("Logging in")} />
//     <Button text="Signup" onClick={() => console.log("Signing up")} />

//       <Layout>
//       <h2>Welcome to the Home Page</h2>
//       <p>This is inside the Layout component.</p>
//     </Layout>
//       <Card>
//       <h1>Title inside Card</h1>
//       <p >This content is passed as children.</p>
//       <button style={{backgroundColor:"black",color:"white"}}>Click Me</button>
//     </Card>
// <Profile>
//   <h2>Alice</h2>
//   <ExtraInfo age={25} />
// </Profile>

// <Profile>
//   <h2>Bob</h2>
//   <ExtraInfo age={30} />
// </Profile>

//     </div>
// }
// export default App;

function App(){
   return <div>
      <button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>

<button type="button" class="btn btn-link">Link</button>
   </div>
}
export default App;