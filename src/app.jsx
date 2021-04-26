import React from "react";
import './app.css';

function App() {
  const name = undefined;
  return (
    <>
      <h1>Hi.</h1>
      {
        name && <h1>Hello {name}:)</h1>
      }
      {
        ['🍇','🍋'].map((element) => <h1>{element}</h1>)
      }
    </>
  );
}

export default App;
