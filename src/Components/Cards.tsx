import React from 'react'
import { Link } from 'react-router-dom';
import Card from './Card';
import productsType from "./productsType";

function isImage(url: string) {
    return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
}
function Cards(props: { items: productsType[] }) {
    let t: any = props.items;
    // console.log(t[0].createdA);
    t = t.map((e: productsType) => {
        if (!isImage(e.avatar)) {
            e.avatar = 'https://dummyimage.com/600x600/D3D3D3/D3D3D3';
        }
        return e;
    });
    return (
        <div className='cards grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 container mt-20'>
            {t.map((e: productsType, index: number) => {
                return <Link to={`/detail/${e.id}`} className='text-center w-full' key={index}>
                  <Card {...e}/>
                </Link>
            })}
        </div>
    )
}

export default Cards