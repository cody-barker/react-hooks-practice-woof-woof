import React from 'react'

function DogCard({pup, setDogDetail}) {

    function handleGoodDog(pup) {
        fetch(`http://localhost:3001/pups/${pup.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({isGoodDog: !pup.isGoodDog})
        })
        .then(r => r.json())
        .then(pup => handleDetail(pup))
    }

    function handleDetail(pup) {
       setDogDetail(
        <div>
            <img src = {pup.image} alt="pup image"></img>
            <h3>{pup.name}</h3>
            <button onClick={() => handleGoodDog(pup)}>{pup.isGoodDog ? 'Good Dog' : 'Bad Dog'}</button>
        </div>
       )
    }

    return(
       <span onClick={() => handleDetail(pup)}>{pup.name}</span>
    )
}

export default DogCard;