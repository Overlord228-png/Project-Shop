import React from 'react'

export default function InputAddBrand(props) {
    return (
        <input
            placeholder="Brend" 
            value={props.addInput} 
            onChange={(e)=>props.setAddInput(e.target.value)}
        />
    )
}