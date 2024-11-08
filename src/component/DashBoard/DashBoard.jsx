import { NavLink, Outlet } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

const DashBoard = () => {
    return (
        <div>
        <Helmet>
        <title>DashBoard</title>
      </Helmet>
            
            <div className="relative bg-white h-[300px] lg:h-[350px] px-5">
                <div className="hero bg-[#9538E2] text-white p-5 lg:px-36 rounded-b-lg h-[250px] lg:h-[294px] ">
                    <div className="hero-content text-center">
                        <div className="max-w-xs lg:max-w-4xl lg:max-h-[500px] absolute top-3 lg:top-10 space-y-1">
                            <h1 className="text-4xl lg:text-5xl">DashBoard</h1>
                            <p className="lg:py-6">
                                Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                            </p>
                            <br/>
                            <div className="space-x-2  mt-7">
                            <NavLink to={"/dashBoard/cart"} 
                            className={({ isActive}) =>
                            isActive ? "bg-slate-700 p-5 rounded-full px-9 " : ""
                            }

                            
                            >
                            Cart
                            </NavLink>

                            <NavLink to={"/dashBoard/wislist"}
                             className={({ isActive}) =>
                            isActive ? "bg-slate-700 p-5 rounded-full px-9" : ""
                            }
                            >
                            Wishlist
                            </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


          <Outlet></Outlet>

            

        </div>
    );
};

export default DashBoard;