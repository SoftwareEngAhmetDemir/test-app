import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import productsType from "./productsType";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Create() {
  
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit: any = (data: productsType) => {
    data.developerEmail = 'eng.ahmed.demir@gmail.com';
    axios.post(`/${data.category}`, data).then(res => {
     
      toast.success("Inserted Sucess", { theme: "colored" })
      setTimeout(() => {
       navigate('/');
     }, 2000);

      // redirect to home page
    }).catch(e => {
      toast.error("Inserted not Sucess", { theme: "colored" })
      return e
    });
    return data;
  };
  return (
    <div className="w-full max-w container">
      <ToastContainer />
      <h1 className="text-center text-xl">Create Product</h1>
      <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input className="input-text" type="text" placeholder="Product name" {...register("name")} required />
        </div>
        <div className="mb-6">
          <textarea className="text-area"
            placeholder="Description" {...register('description')} required></textarea>
        </div>
        <div className="mb-4">
          <input className="input-text" type="text" placeholder="Image URL" {...register("avatar")} required />
        </div>
        <div className="flex mb-4">
          <div className="border-gray w-full list relative inline-block rounded">
            <select defaultValue={'categories'} className="input-text block appearance-none w-full bg-white border-gray text-gray"
              {...register("category")} required>
              <option value="categories">categories</option>
              <option value="products">products</option>
            </select>
            <div className=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray">
            </div>
          </div>
        </div>
        <div className="mb-4">
          <input className="input-text" type="number" placeholder="Price" min="1" {...register("price")} required />
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