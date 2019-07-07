import React from 'react'

const styleBase = {
    input: {
        border: "none",
        borderBottom: "1px solid silver",
        outline: "none",
        fontSize: "1em",
        padding: "5px",
        width: "20vw",
        paddingTop: "2%",
    },
    span : {
        borderBottom: "1px solid silver",
        fontSize: "0.8em",
        paddingTop: "55%",
        padding: "6px",

    }
}

const InputContact = ({keyState, title, style, funct, value}) => {
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

export default InputContact
