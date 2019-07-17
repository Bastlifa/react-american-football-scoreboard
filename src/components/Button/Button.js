import React from 'react'

function Button(props)
{
    return (
        <button onClick={props.cb} className={`${props.className}`}>{props.textContent}</button>
    )
}

export default Button