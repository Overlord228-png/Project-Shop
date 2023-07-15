import BtnAddBrand from "components/Buttons/BtnAddBrand"
import InputNameBrand from "components/Inputs/InputAdd/InputNameBrand"
import React, { useEffect, useState } from "react"
import axios from "axios";

export default function BrandInfo() {
    const [saveIdBrand, setSeaveIdBrand] = useState()
    const [brandName, setBrandName] = useState ('')
    const [brands, setBrands] = useState([])

    const ShowIdBrand =(id)=>{
        setSeaveIdBrand(id)
    }

    const loadBrands = async () => {
        const resp = await axios.get('http://localhost:5000/api/brand')
        setBrands(resp.data)
    }

    const addBrand = async () => {
        const resp = await axios.post('http://localhost:5000/api/brand', {name:brandName})
        setBrands([...brands,resp.data])
    }

    useEffect(()=>{
        loadBrands()
    },[])
    return (
        <div className="">
            <InputNameBrand setBrandName={setBrandName} brandName={brandName} />
            <BtnAddBrand addBrand={addBrand} />
            <ul onChange={(e)=> ShowIdBrand(e.target.selectedOptions[0].value)}>
                {
                    brands.map((brand,idx)=>
                        <li key={idx} value={brand.id}>
                            {brand.name}
                        </li>
                    )
                }
            </ul>
        </div>
    )
}