import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import productsType from './productsType';

function HomeFilter() {
    const [products, setProducts] = useState<productsType[]>([]);
    const[category,setCategory] = useState<string>('categories');
const get_data =()=>{
 axios.get(`/${category}`)
    .then(res => {
        setProducts([...res.data]);
    }).catch(e=>e)
}
    useEffect(() => {
      get_data();
    },[products,category]);
    return (
        <>
            <div className='grid lg:grid-cols-6 gap-4 mx-10'>
                <div className='lg:col-span-2 w-full'>
                <input type="text" className='h-12 w-full px-4 rounded' placeholder='Apple Watch Samsung S21,Macbook Pro,...'/>
                </div>
                <div className="list grid-cols-1 md:grid-cols-2 lg:col-end-7 lg:col-span-1 relative inline-block rounded">
                    <select defaultValue={'categories'} 
                    className="h-12 block appearance-none w-full bg-white 
                    text-gray border-gray px-4 py-2 pr-8 rounded shadow" onChange={(e)=>setCategory(e.target.value)}>
                        <option value="categories">categories</option>
                        <option value="products">products</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                </div>
            </div>
            {products.length > 0 && products[0] ? <Cards items={[...products]} category={category} /> : <div>wait</div>}
        </>
    )
}

export default HomeFilter