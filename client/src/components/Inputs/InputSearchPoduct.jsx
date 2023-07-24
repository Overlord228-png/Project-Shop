import React from 'react'

export default function InputSearchPoduct(props) {
    return (
        <input
            type="text"
            onChange={(e)=>props.setSearchProduct(e.target.value)}
            placeholder='search product'
        />
    )
}