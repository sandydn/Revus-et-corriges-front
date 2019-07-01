import React from 'react'
import styled from 'styled-components'

const input = {
    input: {
        color: "blue",
        backgroundColor: "blue",
        border: "0px, Opx, Opx, 1px",
    },
    span : {
        fontSize: "3em"
    }
}

const InputInLine = ({keyState, title, style, funct, value}) => {
    return <div>

        <span>
            {title || "nothing"}
        </span>
        <input 
            style={input}
            onChange={(e) => funct && funct(keyState, e)}
            value={value || "" } 

        /> 
    </div>
}

export default InputInLine
