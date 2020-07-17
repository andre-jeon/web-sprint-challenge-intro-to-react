// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const StyledDetails = styled.div`
    
    /* display:flex; */

    h2 {
        color: white;
    }

`

function Character(props) {
    const { data } = props

    return( 
        <StyledDetails className="indiviual-character-card">
    
            <div className="character-image">
            {
                data.map((char) => {
                    return <img src = {char.image} />
                })
            }
            </div>

            <div className="character-name">
            {
                data.map((char) => {
                    return <h2>Name: {char.name}</h2>
                })
            }
            </div>

            <div className='character-status'>
            {
                data.map((char) => {
                    return <h3>Status: {char.status}</h3>
                })
            }
            </div>

        </StyledDetails>
    )
}

export default Character