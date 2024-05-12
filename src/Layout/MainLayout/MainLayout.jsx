import { Outlet } from "react-router-dom";
import Header from "../../Components/Shared/Header/Header";


const MainLayout = () => {
    return (
        <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-2xl">
            <Header/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;