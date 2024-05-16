import { Outlet } from "react-router-dom";
import Header from "../../Components/Shared/Header/Header";
import Footer from "../../Components/Shared/Footer/Footer";


const MainLayout = () => {
    return (
        <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-2xl mx-auto">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;