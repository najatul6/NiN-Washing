import brandLogo from "../../../assets/NiNWashing.svg"
import Button from "../Button/Button";
import Navbar from "./Navbar/Navbar";

const Header = () => {
    return (
        <div>
            <img src={brandLogo} alt="nintalk" />
            <Navbar/>
            <Button btnText="hello vai"/>
        </div>
    );
};

export default Header;