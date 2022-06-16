import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productsType from "./productsType";

function Detail() {
    let { index,category} = useParams();
    const [products, setProducts] = useState<productsType>();

    useEffect(() => {
        axios.get(`/${category}/${index}`)
            .then(res => {
                setProducts(res.data);
            }).catch(e => e)
    }, [index, products])
    return (
        <div className="container">
            <div className="grid lg:grid-rows-4 lg:grid-cols-4 gap-y-2 gap-x-8">
                <div className="lg:row-span-4 lg:col-span-1 row-span-1 bg-white">
                    <img src={`${products?.avatar}`} alt="" width='100%' style={{maxHeight:'300px'}}/>
                </div>
                <div className="lg:row-span-3 lg:col-span-2 lg:text-left text-center">
                    <h1 className="font-bold text-xl">{products?.name}</h1>
                </div>
                <div className="price lg:row-span-1 lg:col-span-3 lg:flex lg:items-end text-xl lg:text-left text-center">
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