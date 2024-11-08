import React, { useContext } from 'react';
import { AppContext } from '../contextapi/AppProvider';
import myImage4 from '../../../assets/delete.png';

export default function Wishlist() {
  const { addwislist, handleDelete,handleChoosePlayer } = useContext(AppContext);
  

  return (
    <div>
      {addwislist.map((a) => (
        <div
          key={a.id}
          role="alert"
          className="mt-3 alert shadow-lg h-40 w-4/5 mx-auto bg-slate-200"
        >
          <div className="avatar">
            <div className="w-16 rounded">
              <img src={a.product_image} alt="Product" />
            </div>
          </div>
          <div>
            <h3 className="font-bold">{a.product_title}</h3>
            <div className="text-xs">{a.description}</div>
            <h4 className="font-bold">Price: ${a.price}</h4>
            <button onClick={()=>handleChoosePlayer(a)} className="btn btn-primary rounded-full">Add to Cart</button>
          </div>
          <button onClick={() => handleDelete(a.id, "wishlist")} className="btn btn-sm">
            <img className="h-7 w-7" src={myImage4} alt="Delete Icon" />
          </button>
        </div>
      ))}
    </div>
  );
}
