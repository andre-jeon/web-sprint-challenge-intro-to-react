// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const StyledDetails = styled.div`

    h1 {
        color: red;
    }

`

function Character(props) {
    const {data} = props

    return(
        <div className="character-container">
            {
                data.map((char) => {
                    return char.name
                })
            }
        </div>
    )
}

export default Character
