import React from 'react'

const ConstComponent = (props) => {
    return(
        <div>
            <p>Hello i am: {props.name}</p>
            <p>children: {props.children}</p>
        </div>
    )
}

export default ConstComponent