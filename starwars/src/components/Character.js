// Write your Character component here
import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const StyledDetails = styled.div`

    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    h3 {
        color: red;
    }

    span {
        color: white;
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
    const { data } = props

    return( 
        <StyledDetails className="card-container">
            {
                data.map((card) => {
                    return <Card card = {card} />
                })
            }
        </StyledDetails>
    )
}

export default Character