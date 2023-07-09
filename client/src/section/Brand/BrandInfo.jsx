import React from "react"

export default function ProductInfo() {
    return (
        <></>
    )
}

/**
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
 */