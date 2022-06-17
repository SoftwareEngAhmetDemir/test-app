
import { get_data} from './helpers';

describe('check services', () => {
    test('check service for categories', async() => {
     await  get_data('/categories').then(data=>{
           expect(data).toBeGreaterThanOrEqual(1);
       })
    })

    test('check service for products', async() => {
        await  get_data('/products').then(data=>{
              expect(data).toBeGreaterThanOrEqual(1);
          })
       })
})