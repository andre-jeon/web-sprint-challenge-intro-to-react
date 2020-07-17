// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const StyledDetails = styled.div`
    
    display:flex;

    h2 {
        color: white;
    }

`

function Character(props) {
    const { data } = props

    return(
        <div className="character-container">
            
            {
                data.map((char) => {
                    return <img src = {char.image} />
                })
            }


            {
                data.map((char) => {
                    return <h2>{char.name}</h2>
                })
            }

            {
                data.map((char) => {
                    return <h3>{char.status}</h3>
                })
            }


        </div>
    )
}

export default Character