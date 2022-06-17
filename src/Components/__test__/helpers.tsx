import axios from "axios";
import productsType from "../productsType";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL; 

const get_data=async(url:string)=>{

  return   await axios.get(url)
    .then(res => {
        return res.data.length;
    })
}


const create_test=async(url:string,body:productsType)=>{
      return  await axios.post(url,body)
        .then(res => true).catch(e=> false);
    }
export {get_data,create_test};