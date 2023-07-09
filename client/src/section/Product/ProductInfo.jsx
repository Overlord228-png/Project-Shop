import React , { useEffect, useState } from "react"
import axios from "axios"

import InputAddFile from "components/Inputs/InputAdd/InputAddFile"

import AddProduct from "components/Buttons/BtnAdd/AddProduct"
import InputNameProduct from "components/Inputs/InputAdd/InputNameProduct"
import InputPriceProduct from "components/Inputs/InputAdd/InputPriceProduct"

export default function ProductInfo() {
    /// общие хуки
    /// for brand
    const [saveIdBrand, setSeaveIdBrand] =useState ()
    const [brands, setBrands] = useState([])
    const [addInput, setAddInput] = useState("")

    /// for type
    const [saveIdType, setSeaveIdType] = useState()
    const [types, setTypes] = useState([])
    const [addTypes, setAddTypes] = useState('')

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

    const addBrand = async () => {
        const resp = await axios.post('http://localhost:5000/api/brand', {name:addInput})
        setBrands([...brands,resp.data])
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

    const addTypesInput = async ()=>{
        ///console.log(addTypes)
        const resp = await axios.post('http://localhost:5000/api/type', {name:addTypes})
        setTypes([...types,resp.data])
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
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <img src={`http://127.0.0.1:5000/${product.img}`} alt={product.name}/>
                    <h2>{product.price}</h2>
                </div>
            ))}
        </div>
    )
}

/*
import React , { useEffect, useState } from "react"
import axios from "axios"

import InputAddFile from "components/Inputs/InputAdd/InputAddFile"

import AddProduct from "components/Buttons/BtnAdd/AddProduct"
import InputNameProduct from "components/Inputs/InputAdd/InputNameProduct"
import InputPriceProduct from "components/Inputs/InputAdd/InputPriceProduct"

export default function ProductInfo() {
    /// общие хуки
    /// for brand
    const [saveIdBrand, setSeaveIdBrand] =useState ()
    const [brands, setBrands] = useState([])
    const [addInput, setAddInput] = useState("")

    /// for type
    const [saveIdType, setSeaveIdType] = useState()
    const [types, setTypes] = useState([])
    const [addTypes, setAddTypes] = useState('')

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

    const addBrand = async () => {
        const resp = await axios.post('http://localhost:5000/api/brand', {name:addInput})
        setBrands([...brands,resp.data])
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

    const addTypesInput = async ()=>{
        ///console.log(addTypes)
        const resp = await axios.post('http://localhost:5000/api/type', {name:addTypes})
        setTypes([...types,resp.data])
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
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <img src={`http://127.0.0.1:5000/${product.img}`} alt={product.name}/>
                    <h2>{product.price}</h2>
                </div>
            ))}
        </div>
    )
}
*/