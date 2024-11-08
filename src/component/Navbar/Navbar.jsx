import { NavLink } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { useContext } from 'react';
import { AppContext } from '../contextapi/AppProvider';

const Navbar = () => {
    const { additem} = useContext(AppContext);
    console.log(additem);
    const Link = <>
        <div className="lg:flex lg:gap-12">
            <div className="text-lime-400"><NavLink to="/" 
             className={({ isActive}) =>
     isActive ? "bg-slate-700 p-1 lg:p-5 rounded-md" : ""
  }>Home</NavLink></div>

  
            <div className="text-lime-400"><NavLink to="/statistic"
            className={({ isActive}) =>
     isActive ? "bg-slate-700 p-1 lg:p-5 rounded-md" : ""
  }>Statistic</NavLink></div>



            <div className="text-lime-400"> <NavLink to="/dashBoard/cart"
            className={({ isActive}) =>
     isActive ? "bg-slate-700 p-1 lg:p-5 rounded-md" : ""
  }>DashBoard</NavLink></div>


<div className="text-lime-400"> <NavLink to="/calendar"
            className={({ isActive}) =>
     isActive ? "bg-slate-700 p-1 lg:p-5 rounded-md" : ""
  }>Calendar</NavLink></div>



        </div>

    </>
    return (
        <div className="rounded-t-lg bg-[#9538E2] text-white lg:px-36">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-30 bg-white text-black p-5">
                            {Link}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Link}
                    </ul>
                </div>
                <div className="navbar-end ">
                    <a className="rounded-full mr-3 bg-white text-black p-3 relative"><AiOutlineShoppingCart /><span className='absolute bottom-4 left-6'>{additem.length}</span></a>
                    <a className="rounded-full  bg-white text-black p-3"><FaRegHeart /></a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;