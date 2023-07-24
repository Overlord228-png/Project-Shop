import React, { useEffect, useState } from 'react'
import axios from "axios";
import InputSearchPoduct from 'components/Inputs/InputSearchPoduct';

export default function MainInfo() {
    // объекты со всеми брендами
    const [brands, setBrands] = useState ([])

    // объекты со всеми продуктами
    const [products, setProducts] = useState ([])

    // id активного бренда (выбранного)
    const [activeBrand, setActiveBrand] = useState(-1)

    // объекты со всеми типами
    const [types, setTypes] = useState ([])

    // объекты со всеми брендами и типами
    const [loadProdcutsByType, setloadProdcutsByType] = useState ([])

    // id активного типу (выбранного)
    const [activeType, setActiveType] = useState(-1)

    // поиск товара
    const [searchProducr, setSearchProduct] = useState('')

    // функция которая меняет ид активного бренда
    const changeActiveBrand =(id)=>{
        setActiveBrand(id)
    }

    // функция которая меняет ид активного типу
    const changeActiveType =(id)=>{
        setActiveType(id)
    }
    
    // функция загрузки всех объектов типу
    const loadTypes = async () => {
        const resp  = await axios.get ("http://localhost:5000/api/type")
        setTypes(resp.data)
    }
    const loadProductByType = async () => {
        const resp = await axios.get(`http://127.0.0.1:5000/api/device?typeId=${activeType}`);
        console.log(resp)
        setProducts(resp.data.rows);
    };

    // функция загрузки всех объектов брендов
    const loadBrands = async () => {
        const resp = await axios.get('http://127.0.0.1:5000/api/brand')
        setBrands(resp.data)
    }
    const loadProductByBrand = async () => {
        const resp = await axios.get(`http://127.0.0.1:5000/api/device?brandId=${activeBrand}`);
        setProducts(resp.data.rows);
    };
    const loadProductByTypeBrand = async () => {
        const resp = await axios.get(`http://127.0.0.1:5000/api/device?brandId=${activeBrand}&typeId=${activeType}`);     
        setProducts(resp.data.rows);
    }
    const loadProducts = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/api/device');
            setProducts(response.data.rows);
            console.log(response)
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(()=>{
        // поиск и отбор нуженых продуктов
    },[searchProducr])

    // хук для вызова метода загрузки всех брендов и всех продуктов при загрузке странички
    useEffect(()=>{
        loadBrands()
        loadTypes()
        // Загружать все товары
    }, [])

    // хук который будет загружать продукты по выбранному бренду
    useEffect(()=>{
        //console.log(activeBrand,activeType)
        if (activeBrand === -1 && activeType === -1) {
            loadProducts();
        } else if (activeBrand === -1 && activeType !== -1) {
            loadProductByType();
        } else if (activeBrand !== -1 && activeType === -1) {
            loadProductByBrand();
        } else if(activeBrand !== -1 && activeType !== -1){
            loadProductByTypeBrand();
        }
    },[activeBrand,activeType])
    
    return (
        <main className="">
            <InputSearchPoduct setSearchProduct={setSearchProduct} searchProducr={searchProducr}/>
            <select className="" onChange={(e)=> changeActiveBrand(e.target.selectedOptions[0].value)}>
                {
                    brands.map((brand,idx)=>
                    <option className="" key={idx} value={brand.id}>
                        {brand.name}
                    </option>
                    )
                }
                <option value="-1">sad</option>
            </select>
            <select className="" onChange={(e)=> changeActiveType(e.target.selectedOptions[0].value)}>
                {
                    types.map((type,idx)=>
                        <option className="" key={idx} value={type.id}>
                            {type.name}
                        </option>
                    )
                }
                <option className="" value="-1">sad</option>
            </select>
            <div className="">
                <h3 className="">Список продуктов</h3>
                {products.map((product) => (
                    <div className="product__item" key={product.id}>
                        <h2 className="">{product.name}</h2>
                        <img className="product__img" src={`http://127.0.0.1:5000/${product.img}`} alt={product.name}/>
                        <p className="text__price">{product.price}$</p>
                    </div>
                ))}
            </div>
        </main>
    )
}