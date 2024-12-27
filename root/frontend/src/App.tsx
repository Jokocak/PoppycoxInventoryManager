// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import { useState } from "react";
import Alert from "./Alert";
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import ListGroup from "./ListGroup";

// function App() {
//   let items = ["New York", "San Francisco", "Charlotte", "Tokyo"];

//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   }

//   return (
//     <h1>
//       <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
//     </h1>
//   );
// }

// export default App;

// import Alert from "./Alert";

// function App() {
//   return (
//     <div>
//       <Alert>Hello World</Alert>
//     </div>
//   );
// }

// export default App;

// function App() {
//     const [alertVisible, setAlertVisibility] = useState(false);

//   return (
//     <div>
//         {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}
//       <Button color="primary" onClick={() => setAlertVisibility(true)}>My Button</Button>
//     </div>
//   );
// }

// export default App;

function App() {
  const tabs = ["Inventory", "Sales", "Predictions", "Login"];
  return (
    <div>
      <p>Home Page</p>
      <ButtonGroup />
    </div>
  );
}

export default App;
