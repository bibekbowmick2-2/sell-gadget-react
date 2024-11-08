import React from 'react';
import { Link } from 'react-router-dom';
const Card = ({card }) => {
   const {product_title ,price, product_image,id } = card;

    return (
        <div>
            <div className="card bg-gray-100 w-96 lg:w-72 ml-5 lg:ml-0 h-[450px] shadow-xl">
                <div className="h-[300px] px-10 pt-10">
                    <img
                        className="w-4/5 h-[200px] rounded-xl"
                        src={product_image}
                        alt={product_title } />
                </div>
                <div className="card-body mt-0">
                    <h4 className="card-title">{product_title}</h4>
                    <p>Price:{price}k</p>
                    <div className="card-actions">
                   

                    
                    
                
                    <Link to={`/product-details/${id}`}>

                    <button className="btn border-2 border-[#9538E2] rounded-full text-[#9538E2] bg-white">View Detail</button>
                    </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;