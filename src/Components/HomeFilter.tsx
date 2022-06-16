import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import productsType from './productsType';

function HomeFilter() {
    const [products, setProducts] = useState<productsType[]>([]);

const get_data = async()=>{
  await  axios.get(`http://62286b649fd6174ca82321f1.mockapi.io/case-study/products`)
    .then(async res => {
        setProducts([...res.data]);
        console.log(products);
    }).catch(e=>e)
}
    useEffect(() => {
      get_data();
    },[products])
    return (
        <>
            <div className='grid lg:grid-cols-6 gap-4 mx-10'>
                <div className='lg:col-span-2 w-full'>
                <input type="text" className='h-12 w-full px-4 rounded' placeholder='Apple Watch Samsung S21,Macbook Pro,...'/>
                </div>

                {/* <input type="text" className='h-12 w-full' /> */}

                {/* <div className="list grid-cols-1 md:grid-cols-2 lg:col-end-7 lg:col-span-1 relative inline-block">
                        
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
                    </div> */}
                <div className="list grid-cols-1 md:grid-cols-2 lg:col-end-7 lg:col-span-1 relative inline-block rounded">
                    <select className="h-12 block appearance-none w-full bg-white text-gray border-gray px-4 py-2 pr-8 rounded shadow">
                        <option>Really long option that will likely overlap the chevron</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                </div>
            </div>
            {products.length > 0 && products[0] ? <Cards items={[...products]} /> : <div>wait</div>}
        </>
    )
}

export default HomeFilter