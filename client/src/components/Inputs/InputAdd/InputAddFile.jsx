import React from 'react'

export default function InputAddFile(props) {
    return (
        <input 
            placeholder="File" 
            type='file'
            onChange={(e)=>props.setImg(e.target.files[0])}
        />
    )
}