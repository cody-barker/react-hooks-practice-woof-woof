import React from 'react'

function DogCard({pup}) {
    const {name, isGoodDog, image} = pup

    return(
       <span>{name}</span>
    )
}

export default DogCard;