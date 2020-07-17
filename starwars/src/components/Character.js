// Write your Character component here
import React from 'react'

function Character(props) {
    const { character, setCharacters } = props

    return(
        <div className="character-container">
            <ul>
                <li>
                    {
                    setCharacters(character.map((character) => {
                        return {character}
                    }))
                    }
                </li>
           </ul>
        </div>
    )
}

export default Character
