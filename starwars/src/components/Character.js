// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const StyledDetails = styled.div`
    
    /* display:flex; */

    h2 {
        color: white;
    }

    span {
        color: black;
    }

    #alive {
        color: green;
    }

    #dead {
        color: red;
    }

    #else {
        color: black;
    }
`

function Character(props) {
    const { data, charCard } = props

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
                    return <h2>Name: <span>{char.name}</span></h2>
                })
            }
            </div>

            <div className='character-status'>
            {
                data.map((char) => {
                    if (char.status === 'Alive'){
                        return <h3>Status: <span id='alive'>{char.status}</span></h3>
                    } else if ((char.status === 'Dead')){
                        return <h3>Status: <span id='dead'>{char.status}</span></h3>
                    }else{
                        return <h3>Status: <span id='else'>{char.status}</span></h3>
                    }
                })
            }
            </div>

        </StyledDetails>
    )
}

export default Character