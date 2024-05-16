import { Link, NavLink } from "react-router-dom";
import { menuItems } from "../../../Utils/menuItem";
import brandLogo from "../../../assets/NiNWashing.svg";
import Button from "../Button/Button";
import { BiSolidPhoneCall } from "react-icons/bi";

const Header = () => {
  return (
    <>
      <div className="navbar shadow-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-2 z-[99] p-2 rounded-box w-52 bg-base-300 shadow-inner"
            >
              {menuItems?.map((link) => (
                <li key={link?.label} className="text-lg font-bold">
                  <NavLink
                    to={link?.path}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-white-coffee"
                        : "text-deep-blue hover:text-red-700"
                    }
                  >
                    {link?.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <Link to="/" className="">
            <img
              src={brandLogo}
              alt="Brand Logo here"
              className="w-28 md:w-full h-full"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">
            {menuItems?.map((link) => (
              <li key={link?.label} className="text-lg font-bold">
                <NavLink
                  to={link?.path}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "!text-white-coffee !bg-base-100"
                      : "text-deep-blue hover:!bg-base-100"
                  }
                >
                  {link?.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <Button btnText="Call Now" afterIcn={<BiSolidPhoneCall />} extraClass="bg-deep-blue text-white px-2 py-1 hover:bg-white-coffee hover:text-white animate-bounce"/>
        </div>
      </div>
    </>
  );
};

export default Header;
