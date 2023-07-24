import React , { useEffect, useState } from "react"
import axios from "axios"

import InputAddFile from "components/Inputs/InputAdd/InputAddFile"

import AddProduct from "components/Buttons/AddProduct"
import InputNameProduct from "components/Inputs/InputAdd/InputNameProduct"
import InputPriceProduct from "components/Inputs/InputAdd/InputPriceProduct"

import "style/styleProduct.css"

export default function ProductInfo() {
    /// общие хуки
    /// for brand
    const [saveIdBrand, setSeaveIdBrand] =useState ()
    const [brands, setBrands] = useState([])

    /// for type
    const [saveIdType, setSeaveIdType] = useState()
    const [types, setTypes] = useState([])

    /// for Img
    const [img, setImg] = useState({});
    const [showProduct, setShowProduct] = useState([]);

    /// input
    const [nameDevice, setNameDevice] = useState('') /// for name
    const [priceDevice, setPriceDevice] = useState('') /// for price
    /// input
    ///общие хуки 

    const showDevice = async () => {
        const resp = await axios.get("http://127.0.0.1:5000/api/device/");
        setShowProduct(resp.data.rows);
    };

    const addProduct = async () => {
        const name = nameDevice;
        const price = priceDevice;
        const brandId = saveIdBrand;
        const typeId = saveIdType;
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('brandId', brandId);
        formData.append('typeId', typeId);
        formData.append('img', img);
    
        const resp = await axios.post('http://127.0.0.1:5000/api/device', formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        showDevice(); // Обновляем список товаров после добавления нового товара
    };
    
    ///brand
    const ShowIdBrand =(id)=>{
        setSeaveIdBrand(id)
    }

    const loadBrands = async () => {
        const resp = await axios.get('http://localhost:5000/api/brand')
        setBrands(resp.data)
    }
    ///brand

    /// type
    const ShowIdType =(id)=>{
        setSeaveIdType(id)
    }

    const loadTypes = async()=>{
        const resp = await axios.get('http://localhost:5000/api/type')
        setTypes(resp.data)
    }

    /// type

    /// Общий useEffect
    useEffect(()=>{
        loadBrands()
        loadTypes()
        showDevice()
    },[])
    /// Общий useEffect

    return (
        <div>
            <div className="">
                <InputNameProduct setNameDevice={setNameDevice} nameDevice={nameDevice}/>
                <InputPriceProduct setPriceDevice={setPriceDevice} priceDevice={priceDevice}/>
            </div>
            
            <br />
            <br />

            <div className="">
                <InputAddFile setImg={setImg} img={img} />
            </div>

            <br />
            <br />

            <div className="">
                <select onChange={(e)=>ShowIdType(e.target.selectedOptions[0].value)}>
                    {
                        types.map((type,idx)=>
                        <option key={idx} value={type.id}>
                            {type.name}
                        </option>
                        )
                    }
                    <option value="1">sad</option>
                </select>
            </div>

            <br />
            <br />

            <div className="">
                <select onChange={(e)=> ShowIdBrand(e.target.selectedOptions[0].value)}>
                    {
                        brands.map((brand,idx)=>
                        <option key={idx} value={brand.id}>
                            {brand.name}
                        </option>
                        )
                    }
                    <option value="1">sad</option>
                </select>
            </div>

            <br />
            <br />

            <div className="">
                <AddProduct addProduct={addProduct} />
            </div>
            
            {showProduct.map((product) => (
                <div key={product.id} className="product__item">
                    <h2 className="">{product.name}</h2>
                    <img src={`http://127.0.0.1:5000/${product.img}`} alt={product.name} className="product__img"/>
                    <p className="text__price">{product.price}$</p>
                </div>
            ))}
        </div>
    )
}