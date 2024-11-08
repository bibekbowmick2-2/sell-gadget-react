import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";
import Cards from "../Cards/Cards";
const MainContainer = () => {
    return (
        <div className="">
            <Header></Header>
            <div className="min-h-screen">
            
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainContainer;