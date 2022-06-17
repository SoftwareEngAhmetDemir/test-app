import productsType from '../productsType';
import { create_test } from './helpers';

describe('check creation', () => {
    let body: productsType = {
        id: 99,
        name: 'Apple',
        price: 1200,
        category: 'electronic',
        description: 'MacBook',
        avatar: 'https://as-images.apple.com/is/HA244_AV3?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1631831845000',
        developerEmail: 'eng.ahmed.demir@gmail.com'
    }
    test('check service for products', async() => {
        await  create_test('/products',body).then(data=>{
            console.log(data);
           expect(data).toBe(true);
          })
       })
})