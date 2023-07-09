import React from 'react'

export default function InputEmailItem(props) {
    return (
        <div>
            <input placeholder='email' type="email" id="email" value={props.email} onChange={(e) =>props.setEmail(e.target.value)} required />
        </div>
    )
}