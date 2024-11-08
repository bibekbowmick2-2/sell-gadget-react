import React from 'react';
import { NavLink } from 'react-router-dom';
import { useEffect,useState } from "react";
const Sidebar = ({categories}) => {

    

    return (
        <div className='max-w-60 mx-auto lg:ml-0'>
            <div className='flex-row space-y-5 border-2 border-gray-200 rounded-lg p-5'>
            {
                categories.map(categorie =>(
                
                    <div className="w-[200px] bg-gray-100 rounded-full py-3 px-10"><NavLink to={`/categories/${categorie.category}`} 
                    key={categorie.id} className="text-gray-500">{categorie.category} </NavLink></div>
                ))
            }
                
                
                
            </div>
        </div>
    );
};

export default Sidebar;