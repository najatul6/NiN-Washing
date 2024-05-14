import { NavLink } from "react-router-dom";
import { menuItems } from "../../../Utils/menuItem";
import brandLogo from "../../../assets/NiNWashing.svg";
import Button from "../Button/Button";

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
              className="menu menu-sm dropdown-content mt-2 z-[1] p-2 shadow bg-white rounded-box w-52"
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
                        : "text-deep-blue"
                    }
                  >
                    {link?.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <a className="btn btn-ghost">
            <img
              src={brandLogo}
              alt="Brand Logo here"
              className="w-28 md:w-full h-full"
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
            {menuItems?.map((link) => (
              <li key={link?.label} className="text-lg font-bold">
                <NavLink
                  to={link?.path}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-white-coffee"
                      : "text-deep-blue"
                  }
                >
                  {link?.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <Button btnText="Call Now" />
        </div>
      </div>
    </>
  );
};

export default Header;
