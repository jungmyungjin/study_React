import React from "react";

function Food({ fav }) {
  // function Food(props) {
  return <h1> I'm {fav} </h1>;
  // return <h1> I'm {props.fav} </h1>;
}

function App() {
  return (
    <div>
      <h1>Hello!!!!</h1>
      <Food fav="Pizza" />
      <Food fav="Chicken" />
      <Food fav="dorazi" />
      <Food fav="goguma" />
    </div>
  );
}

export default App;
