import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ShopInfo() {
    const [search, setSearch] = useState('');
    const [sortOption, setSortOption] = useState('name');
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:5000/api/device/')
                setProducts(response.data.rows)
            } catch (error) {
                console.error('Error fetching products:', error)
            }
        };
        fetchProducts()
    }, []);

    useEffect(() => {
        const filterAndSortProducts = () => {
        const filteredByName = products.filter(product =>
            product.name.toLowerCase().includes(search.toLowerCase())
        );
        const filteredByPrice = products.filter(product =>
            product.price.toString().includes(search)
        );
        const filteredProducts =
            sortOption === 'name' ? filteredByName : filteredByPrice;
        if (sortOption === 'price') {
            filteredProducts.sort((a, b) => b.price - a.price);
        }
        setFilteredProducts(filteredProducts);
        };
        filterAndSortProducts();
    }, [search, sortOption, products]);

    return (
        <section>
            <input
                type="text"
                value={search}
                placeholder="Search"
                onChange={e => setSearch(e.target.value)}
            />
            <select value={sortOption} onChange={e => setSortOption(e.target.value)}>
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
            </select>
            <div className="product__container">
                {filteredProducts.map(product => (
                    <div className="product__card" key={product.id}>
                        <h2 className="product__name">{product.name}</h2>
                        <img className="product__img" src={`http://127.0.0.1:5000/${product.img}`} alt={product.name} />
                        <p className="product__price">{product.price}$</p>
                    </div>
                ))}
            </div>
        </section>
    );
}


/*
import React from 'react'
import { useEffect, useState } from 'react'
import axios from "axios";

export default function ShopInfo() {
    const [search, setSearch] = useState('')

    const [products, setProducts ] = useState([]) ///для хранения продуктов
    const [productFilterName, setProductFilterName] = useState ([])

    const [productFilterPrice, setProductFilterPrice] = useState([])


    ///для выгрузки продуктов в пользовательский контент
    const loadProducts = async ()=>{
        const resp = await axios.get("http://127.0.0.1:5000/api/device/")
        setProducts(resp.data.rows)
    }

    ///для выгрузки продуктов в пользовательский контент
    useEffect(()=>{
        // поиск и отбор нуженых продуктов по имени
        if(search != ""){
            const saveProduct = []
            for(const product of products){
                if(product.name.startsWith(search)){
                    saveProduct.push(product)
                }
            }
            setProductFilterName(saveProduct)
        } else {
            setProductFilterName([...products])
        }
    },[search,products])

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
            <div className="product__container">
                {productFilterName.map((product) => (
                    <div className="product__card" key={product.id}>
                        <h2 className="product__name">{product.name}</h2>
                        <img className="product__img" src={`http://127.0.0.1:5000/${product.img}`} alt={product.name}/>
                        <p className="product__price">{product.price}$</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
*/