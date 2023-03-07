import React, {useEffect, useState} from "react";
import DogCard from './DogCard'

function App() {

const [pups, setPups] = useState([]);

const pupComps = pups.map(pup => <DogCard pup={pup}/>)

useEffect(() => {
  fetch('http://localhost:3001/pups')
  .then(r => r.json())
  .then(pups => setPups(pups))
},[]);

console.log(pups)

  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter">Filter good dogs: OFF</button>
      </div>
      <div id="dog-bar">{pupComps}</div>
      
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info"></div>
      </div>
    </div>
  );
}

export default App;
