import axios from 'axios';
import debounce from 'lodash.debounce';
import { useEffect, useState } from 'react'
import Cards from './Cards'
import productsType from './productsType';

function HomeFilter() {
    let [products, setProducts] = useState<productsType[]>([]);
    const [category, setCategory] = useState<string>('categories');
    let [fullData, setfullData] = useState<productsType[]>([]);

    const get_data = () => {
      return   axios.get(`/${category}`)
            .then(res => {
                setProducts([...res.data]);
                setfullData([...res.data]);
            }).catch(e => e)
        }
        useEffect(() => {
            get_data();
               
    }, [category]);

    const updateProducts = (words: string) => {
        let word = words.toLowerCase().trim();
    
        setProducts(fullData);
        if (word.length > 0) {
            let productst = products.filter(product => {
                return product?.name?.toString().toLowerCase().trim().includes(word)
            })
            products = [...productst];
            setProducts(productst);
            console.log(products);
        }
    }
    const debounceSearch = debounce(updateProducts, 500);
    return (
        <>
            <div className='grid lg:grid-cols-6 gap-4 mx-10'>
                <div className='lg:col-span-2 w-full'>
                    <input type="text" className='h-12 w-full px-4 rounded' placeholder='Apple Watch Samsung S21,Macbook Pro,...' onChange={(e) => debounceSearch(e.target.value)} />
                </div>
                <div className="list grid-cols-1 md:grid-cols-2 lg:col-end-7 lg:col-span-2 relative inline-block rounded">
                    <select defaultValue={'categories'}
                        className="h-12 block appearance-none w-full bg-white 
                    text-gray border-gray px-4 py-2 pr-8 rounded shadow" onChange={(e) => setCategory(e.target.value)}>
                        <option value="categories">categories</option>
                        <option value="products">products</option>
                    </select>
                </div>
            </div>
            {products.length > 0 && products[0] ? <Cards items={[...products]} category={category} /> : <div>wait</div>}
        </>
    )
}

export default HomeFilter