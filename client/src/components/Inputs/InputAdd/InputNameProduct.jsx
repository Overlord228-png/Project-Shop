import React from 'react'

export default function InputNameProduct(props) {
    return (
        <input
            placeholder="name device"
            onChange={(e)=>props.setNameDevice(e.target.value)}
        />
    )
}