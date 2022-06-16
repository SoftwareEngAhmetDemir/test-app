import React from 'react'
import productsType from './productsType'

function Card(props: productsType) {
    return (
        <div className='cards'>
            <div className='bg-white p-3 rounded' style={{ width: '100%', height: '250px', background: 'white', objectFit: 'cover' }}>
                <img className='rounded' width='100%' height='50px' style={{maxHeight:'200px'}}
                    src={`${props.avatar}`} alt="none" />
            </div>
            <div className='mt-3 mb-2 brand'>
                <div className='text'>
                    {props.name}
                </div>
            </div>
            <div className='mt-2 price'>
                {props.price}
            </div>
        </div>
    )
}

export default Card