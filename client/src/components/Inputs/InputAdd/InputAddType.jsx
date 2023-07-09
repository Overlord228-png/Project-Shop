import React from 'react'

export default function InputAddType(props) {
    return (
        <input
            placeholder="type" 
            value={props.addTypes} 
            onChange={(e)=>props.setAddTypes(e.target.value)}
        />
    )
}