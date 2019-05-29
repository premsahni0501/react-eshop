import React from 'react'

const ULOL = (props) => {
    if(props.type === 'ol')
    return <ol {...props}>{props.children}</ol>
    else
    return <ul {...props}>{props.children}</ul>
}

export default ULOL;