// src/context/AppContext.js
import React, { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

// Create the context
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [additem, setAddItem] = useState([]);
  const [addwislist, setAddWishlist] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);

  // Fetch data for categories and products
  useEffect(() => {
    fetch('../categories.json')
      .then(response => response.json())
      .then(data => setCategories(data));

    fetch('../Fakedata.json')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const handleChoosePlayer = (each_item) => {
    const new_item = [...additem, each_item];
    setAddItem(new_item);
    toast.success("Item Added to Cart Successfully");
  };

  const handleWislist = (each_item) => {
    const new_item = [...addwislist, each_item];
    setAddWishlist(new_item);
    setIsDisabled(true);
    toast.success("Item Added to Wishlist Successfully");
  };

  const handleDelete = (current_id, listType) => {
    if (listType === "cart") {
      const filteredItems = additem.filter(p => p.id !== current_id);
      setAddItem(filteredItems);
    } else if (listType === "wishlist") {
      const filteredItems = addwislist.filter(p => p.id !== current_id);
      setAddWishlist(filteredItems);
    }
    toast.error("Item Deleted Successfully");
  };

  return (
    <AppContext.Provider value={{ 
      categories, 
      products, 
      additem, 
      handleChoosePlayer, 
      handleDelete, 
      addwislist, 
      handleWislist,
      isDisabled
    }}>
      {children}
    </AppContext.Provider>
  );
};
