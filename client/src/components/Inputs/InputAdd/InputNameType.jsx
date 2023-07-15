import React from 'react'

export default function InputNameType(props) {
    return (
        <input
            placeholder='Type Name'
            onChange={(event)=>props.setNameType(event.target.value)}
            value={props.addTypes}
        />
    )
}