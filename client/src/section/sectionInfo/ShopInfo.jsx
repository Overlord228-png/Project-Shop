import React from 'react'
import { useEffect, useState } from 'react'
import axios from "axios";

export default function ShopInfo() {
    const [search, setSearch] = useState('')

    const [sort, setSort] = useState('')
    const [products, setProducts ] = useState([]) ///для хранения продуктов

    ///для выгрузки продуктов в пользовательский контент
    const loadProducts = async ()=>{
        const resp = await axios.get("http://127.0.0.1:5000/api/device/")
        setProducts(resp.data.rows)
    }
    ///для выгрузки продуктов в пользовательский контент

    console.log(products)

    useEffect(()=>{
        loadProducts()
    },[])
    
    return (
        <section>
                <input 
                    value={search}
                    placeholder='Search' 
                    onChange={(e)=>setSearch(e.target.value)}
                />
                <select name="sort" id="">
                    <option value="">sort</option>
                    <option value="">name</option>
                    <option value="">price</option>
                </select>
                {products.map((product)=>(
                    <div key={product.id}>
                        <h2>{product.name}</h2>
                        <img src={`http://127.0.0.1:5000/${product.img}`}
                            alt={product.name} style={{width:"100px"}}/>
                        <h2>{product.price}</h2>
                    </div>
                ))}
        </section>
    )
}
