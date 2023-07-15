import InputNameType from "components/Inputs/InputAdd/InputNameType"
import React, { useEffect, useState } from "react"
import axios from "axios";
import BtnAddType from "components/Buttons/BtnAddType";

export default function ProductInfo() {
    const [saveIdType, setSeaveIdType] = useState()
    const [types, setTypes] = useState([])
    const [addTypes, setNameType] = useState('')

    const ShowIdType =(id)=>{
        setSeaveIdType(id)
    }

    const loadTypes = async()=>{
        const resp = await axios.get('http://localhost:5000/api/type')
        setTypes(resp.data)
    }

    const addTypesInput = async ()=>{
        const resp = await axios.post('http://localhost:5000/api/type', {name:addTypes})
        setTypes([...types,resp.data])
    }

    useEffect(()=>{
        loadTypes()
    },[])
    return (
        <div className="">
            <InputNameType setNameType={setNameType} addTypes={addTypes} />
            <BtnAddType addTypesInput={addTypesInput} />
            <ul onChange={(e)=>ShowIdType(e.target.selectedOptions[0].value)}>
                {
                    types.map((type,idx)=>
                    <li key={idx} value={type.id}>
                        {type.name}
                    </li>
                    )
                }
            </ul>
        </div>
    )
}