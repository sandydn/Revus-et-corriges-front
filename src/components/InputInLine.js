import React from 'react'

const style = {
    input: {
        color: "blue",
        backgroundColor: "white"
    },
    span : {
        fontSize: "1em",
    }
}

const InputInLIne = ({keyState, title, style, funct, value}) => {
    <div>

        <span>{title || "nothing"}</span>
        <input 
            style={style.input}
            onChange={(e) => funct && funct(keyState, e)}
            value={value || "" }

        /> 
    </div>
}

export default InputInLine
