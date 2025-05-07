import React from "react";
import ToDo from "./components/Pizzacard";
import './App.css';
import img1 from "../src/img/pizza.jpg";

function App() {
  return (
    <>
    <div className="App">
      <ToDo img={img1} text="Пепперони"/>
      <Counter />
    </div>
    </>
  );
}

export default App;
