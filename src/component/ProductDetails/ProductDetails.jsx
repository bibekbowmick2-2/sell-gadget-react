
import {  Rate } from 'antd';
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useLoaderData, useParams } from 'react-router-dom';
import { useContext, useEffect,useState } from "react";
import { AppContext } from '../contextapi/AppProvider';
export default function ProductDetails() {

  const [product, setProduct] = useState({});
  const {id} = useParams();
  const  data = useLoaderData();
  useEffect(() => {
    
        const filteredProduct = data.find(d => d.id == id);
        setProduct(filteredProduct);
    
   
}, [data,id])


const { handleChoosePlayer,handleWislist,disabledItems  } = useContext(AppContext);
const isDisabled = disabledItems.includes(product.id);

return (

    
    <div className="relative ">

<div className="relative bg-white h-[800px] lg:h-[394px] px-1">
                <div className="hero bg-[#9538E2] text-white p-5 lg:px-36 rounded-b-lg h-[250px] lg:h-[294px] ">
                    <div className="hero-content text-center">
                        <div className="max-w-xs lg:max-w-4xl lg:max-h-[500px] absolute top-3 lg:top-10 space-y-1">
                            <h1 className="text-4xl lg:text-5xl">ProductDetails</h1>
                            <p className="lg:py-3">
                                Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                            </p>
                            <div className="space-x-3">
                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>



                

    <div class="hero bg-slate-200 h-[700px] lg:h-[450px] w-[400px] lg:w-2/3 mx-auto absolute top-40 left-3 lg:left-60 rounded-3xl">
  <div class="hero-content flex-col lg:flex-row mb-96">
    <img
      src={product.product_image}
      class="w-60 rounded-lg shadow-2xl mr-20 h-64 mb-0 lg:mb-52" />
    <div>
      <h1 class="text-3xl font-bold mb-14">{product.product_title}</h1>

      <div className='mb-64'>
      
      <p className="">Price: ${product.price}</p>

      {
        product.availability==true? <button class="btn btn-outline btn-success rounded-full">In Stock</button>:
        <button class="btn btn-outline btn-warning rounded-full">Out of Stock</button>
      }
     
      <p className='text-gray-500'>{product.description}</p>
      <h2 class="">Specification</h2>

      {product.specification && (
  <ul>
    {product.specification.map((spec, index) => (
      <li key={index}>{spec}</li>
    ))}
  </ul>
)}
      
      <p className="inline" >Rating: </p> 
      <Rate defaultValue={3} />
      <a className="rounded-full  bg-white text-black p-3">{product.rating}</a>
      <br/>
      

      <button  onClick={()=>handleChoosePlayer(product)} class="btn btn-primary rounded-full">Add to Cart <AiOutlineShoppingCart /></button>
      
      {
        isDisabled? <button onClick={()=>handleWislist(product)}  disabled={isDisabled} className="rounded-full bg-gray-500   text-black p-3"> <FaRegHeart /></button>
        :<button onClick={()=>handleWislist(product)}  disabled={isDisabled} className="rounded-full bg-red-500   text-black p-3"> <FaRegHeart /></button>
      }
    </div>
  </div>
  </div>
</div>

                

  


    </div>
  )
}
