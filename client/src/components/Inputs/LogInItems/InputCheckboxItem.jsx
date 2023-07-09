import React from 'react'

export default function InputCheckboxItem(props) {
    return (
        <div>
            <input type="checkbox" id="remember" checked={props.remember} onChange={(e) =>props.setRemember(e.target.checked)} />
        </div>
    )
}