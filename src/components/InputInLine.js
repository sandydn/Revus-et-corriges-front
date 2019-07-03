import React from 'react'

const styleBase = {
    input: {
        border: "none",
        borderBottom: "2px solid silver",
        outline: "none",
        fontSize: "1em",
        padding: "5px",
        width: "30vw",
        paddingTop: "2%",
    },
    span : {
        padding: "6px",
        borderBottom: "2px solid silver",
        fontSize: "1em",

    }
}

const InputInLine = ({keyState, title, style, funct, value}) => {
    return <div>
        <span style={styleBase.span}>
            {title + " :" || "nothing :"}
        </span>
        <input 
            style={{...styleBase.input, ...style}}
            onChange={(e) => funct && funct(keyState, e)}
            value={value || "" } 
        /> 
    </div>
}

export default InputInLine
