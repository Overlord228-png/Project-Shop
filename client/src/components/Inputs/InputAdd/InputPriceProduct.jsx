import React from 'react'

export default function InputPriceProduct(props) {
    return (
        <input
            placeholder="price device"
            onChange={(e)=>props.setPriceDevice(e.target.value)}
        />
    )
}