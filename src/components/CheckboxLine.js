import React from 'react'

const styleBase = {
    input: {
        outline: "none",
        fontSize: "1em",
        padding: "5px",
    },
    span : {
        padding: "6px",
        fontSize: "1em"
    }
}

const CheckboxLine = ({keyState, title, style, funct, value}) => {
    return <div>
        <span style={styleBase.span}>
            {title + " :" || "nothing :"}
        </span>
        <input 
            style={{...styleBase.input, ...style}}
            type="checkbox"
            id={title}
            onChange={(e) => funct && funct(keyState, e)}
            value={value || "" } 
        /> 
    </div>
}

export default CheckboxLine
