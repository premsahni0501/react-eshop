import React from 'react'

const Atag = (props) => {
    return <a {...props}>{props.children}</a>
}

export default Atag;