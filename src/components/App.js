import React, {useEffect, useState} from "react";
import DogCard from './DogCard';

function App() {

  const [pups, setPups] = useState([]);
  const [dogDetail, setDogDetail] = useState(null)
  const [buttonText, setButtonText] = useState("Filter Good Dogs: OFF")

  const pupComps = pups.map(pup => <DogCard key={pup.id} pup={pup} dogDetail={dogDetail} setDogDetail={setDogDetail}/>)
  const goodDogs = pups.filter(pup => pup.isGoodDog === true)

  function getFetch () {
    fetch('http://localhost:3001/pups')
    .then(r => r.json())
    .then(pups => setPups(pups))
  }

  useEffect(() => {
    getFetch()
  },[]);

  function handleClick() {
    if (buttonText === "Filter Good Dogs: OFF") {
      setPups(goodDogs)
      setButtonText("Filter Good Dogs: ON")
    } else {
      getFetch()
      setButtonText("Filter Good Dogs: OFF")
    }
  }
  
    return (
      <div className="App">
        <div id="filter-div">
          <button onClick={handleClick} id="good-dog-filter">{buttonText}</button>
        </div>
        <div id="dog-bar">{pupComps}</div>
        <div id="dog-summary-container">
          <h1>DOGGO:</h1>
          <div id="dog-info">
            {dogDetail}
          </div>
        </div>
      </div>
    );
  }

export default App;

//on click, change the text of the button
