import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";
import productsType from "./productsType";

function Detail() {
    let { index } = useParams();
    const [products, setProducts] = useState<productsType>();

    useEffect(() => {
        axios.get(`https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${index}`)
            .then(res => {
                setProducts(res.data);
                console.log(res.data);
            })
    })
    return (
        <div className="container">
            <div className="grid grid-rows-4 grid-cols-4 gap-y-2 gap-x-8">
                <div className="row-span-4 col-span-1 bg-white">
                    <img src={`${products?.avatar}`} alt="" width='100%'/>
                </div>
                <div className="row-span-3 col-span-2">
                    <h1 className="font-bold text-xl">{products?.name}</h1>
                </div>
                <div className="price row-span-1 col-span-3 flex items-end text-xl">
                    {products?.price}
                </div>
            </div>
            <div className="border-b-4 border-border-c w-full my-10"></div>

            <div>
                <h3 className="text-title text-xl font-bold my-10">Description</h3>
                <p className="text-description text-sm">
                    {products?.description}
                </p>
            </div>

        </div>
    )
}

export default Detail;