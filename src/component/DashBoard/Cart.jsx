import React, { useContext, useState,useEffect } from 'react';
import { AppContext } from '../contextapi/AppProvider';
import myImage4 from '../../../assets/delete.png';
import myImage5 from '../../../assets/Group.png';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const { additem, handleDelete } = useContext(AppContext);
  const [sortedItems, setSortedItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cost, setcost] = useState(0); // State to manage modal visibility
  const navigate = useNavigate();


  useEffect(() => {
    setSortedItems(additem);
  }, );

  // Calculate the total cost of added items
  const totalCost = sortedItems.reduce((acc, item) => acc + item.price, 0);
  

  // Sort items by price in descending order
  const sortByPriceDescending = () => {
    const sorted = [...additem].sort((a, b) => b.price - a.price);
    setSortedItems(sorted);
  };

  // Toggle modal visibility
  const handlePurchaseClick = () => {
    setIsModalOpen(true);
    
    
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate('/');
  };

  return (
    <div>
      <div className="flex justify-around space-x-8 ">
        <div>
          <h3 className="font-bold">Cart</h3>
        </div>
        <div className="flex space-x-4">
          <h3 className="font-bold inline-block">Total Cost: ${totalCost}</h3>
          <button 
            onClick={sortByPriceDescending} 
            className="btn btn-outline btn-primary rounded-full"
          >
            Sort by price
          </button>
          <button 
            onClick={handlePurchaseClick} 
            className="btn btn-primary rounded-full"
          >
            Purchase
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <dialog open className="modal">
          <div className="modal-box">
          <img src={myImage5} alt="Product" />
            <h2 className="text-lg font-bold">Payment Successfully</h2>
            <p className="py-4">Thanks for Purchase</p>
            <p className="py-4">Total: {totalCost}</p>
            <div className="modal-action">
              <button onClick={handleCloseModal} className="btn">Close</button>
            </div>
          </div>
        </dialog>
      )}

      {sortedItems.map((a) => (
        <div
          key={a.id}
          role="alert"
          className="mt-3 alert shadow-lg h-60 lg:h-40 w-4/5 mx-auto bg-slate-200"
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
          </div>
          <button onClick={() => handleDelete(a.id,"cart")} className="btn btn-sm">
            <img className="h-7 w-7" src={myImage4} alt="Delete Icon" />
          </button>
        </div>
      ))}
    </div>
  );
}
