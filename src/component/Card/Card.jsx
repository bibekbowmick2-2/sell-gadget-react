import React from 'react';
import { Link } from 'react-router-dom';
const Card = ({card }) => {
   const {product_title ,price, product_image,id } = card;

    return (
        <div>
            <div className="card bg-gray-100 w-96 shadow-xl">
                <div className="h-[300px] px-10 pt-10">
                    <img
                        className="w-full h-full rounded-xl"
                        src={product_image}
                        alt={product_title } />
                </div>
                <div className="card-body">
                    <h2 className="card-title">{product_title}</h2>
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