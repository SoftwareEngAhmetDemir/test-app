import axios from "axios";
import { useForm } from "react-hook-form";
import productsType from "./productsType";
function Create() {
  const { register, handleSubmit } = useForm();
  const onSubmit:any = (data:productsType) => {
  data.developerEmail = 'eng.ahmed.demir@gmail.com';
    console.log(data);
    axios.post('https://62286b649fd6174ca82321f1.mockapi.io/case-study/products',data).then(res=>{
      console.log('inserted');
      // redirect to home page
    }).catch(e=>e);
  return data;
};
  return (
    <div className="w-full max-w container">
      <h1 className="text-center font-bold">Create Product</h1>
      <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input className="input-text" id="username" type="text" placeholder="Product name" {...register("name")} required/>
        </div>
        <div className="mb-6">
          <textarea id="message" className="text-area"
            placeholder="Description" {...register('description')} required></textarea>
        </div>
        <div className="mb-4">
          <input className="input-text" id="username" type="text" placeholder="Image URL" {...register("avatar")} required/>
        </div>
        <div className="mb-4">
      
          <div className="border-gray w-full list relative inline-block rounded">
            <select defaultValue={''} className="input-text block appearance-none w-full bg-white border-gray text-gray" 
            {...register("category")} required>
            <option value="" disabled>Choose a drink</option>
              <option value="opt2">Option 2</option>
              <option value="opt3">Option 3</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <input className="input-text" id="username" type="number" placeholder="Price" {...register("price")} required/>
        </div>
        <div className="flex items-center justify-between">
          <button className="btn text-black" type="submit">
           SUBMIT
          </button>
        </div>
      </form>
    </div>
  )
}

export default Create;