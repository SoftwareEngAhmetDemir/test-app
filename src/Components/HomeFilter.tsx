import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import  productsType  from './productsType';

function HomeFilter() {
    const [products, setProducts]= useState<productsType[]>([]);

   
    useEffect(() => {
        axios.get(`https://62286b649fd6174ca82321f1.mockapi.io/case-study/products`)
            .then(res => {
                setProducts([...res.data]);
                console.log(res.data);
            })
    })
   
    return (
        <>
            <div className='grid lg:grid-cols-6 gap-4 mx-10'>
                <div className='lg:col-span-2 w-full'>
                    <input type="text" className='h-12 w-full px-4 rounded' placeholder='Apple Watch Samsung S21,Macbook Pro,...'/>
                </div>
              
                    {/* <input type="text" className='h-12 w-full' /> */}

                    <div className="list grid-cols-1 md:grid-cols-2 lg:col-end-7 lg:col-span-1 relative inline-block">
                        
                            <button type="button" className="menu-button h-12 w-full inline-flex items-center justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium 
                            hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 text-gray rounded" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                Categories
                            </button>
                       

                        <div className="rounded menu-tail origin-top-right absolute right-0 mt-0 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none text-gray" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                            <div className="py-1" role="none">
                                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-0">Account settings</a>
                                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-1">Support</a>
                                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-2">License</a>
                            </div>
                        </div>
                    </div>
               
                </div>
                {products.length>0 ? <Cards items={[...products]}/> : <div>wait</div>}
            </>
            )
}

            export default HomeFilter