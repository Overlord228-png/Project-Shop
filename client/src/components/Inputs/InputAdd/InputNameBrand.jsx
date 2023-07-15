import React from 'react'

export default function InputNameBrand(props) {
    return (
        <input
            type="brand"
            placeholder='Name Brand'
            onChange={(event)=>props.setBrandName(event.target.value)}
            value={props.brandName}
        />
    )
}