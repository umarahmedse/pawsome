import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import { CiShoppingCart, CiUser } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from "react";
const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isNavbarOpaque, setIsNavbarOpaque] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      setIsNavbarOpaque(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClose = (e) => {
    if (
      e.target.id === "screen" ||
      e.target.getAttribute("navitem") === "true"
    ) {
      setIsMobile(false);
    }
  };
  return (
    <div
      className={`w-full ${
        isNavbarOpaque ? "bg-yellow-400/80" : " bg-yellow-400"
      }   flex items-center justify-between h-[85px] p-3 sticky top-0 z-[999] transition-all ease-in-out duration-[1500ms]`}
    >
      <div className="flex items-center justify-between">
        <img src={Logo} alt="Pawsome Logo" className="w-[120px]" />
        <h1 className="text-black text-2xl ml-[-10px] font-vans">Pawsome </h1>
      </div>
      <div className="flex items-center justify-between gap-6">
        <div className="hidden 800px:flex items-center justify-between gap-3 font-semibold  ">
          <Link
            className="p-2 hover:bg-black hover:text-white hover:rounded-[8px] "
            to={"/"}
          >
            Home
          </Link>
          <Link
            className="p-2 hover:bg-black hover:text-white hover:rounded-[8px] "
            to={"/products"}
          >
            Products
          </Link>
          <Link
            className="p-2 hover:bg-black hover:text-white hover:rounded-[8px] "
            to={"/about"}
          >
            About
          </Link>
          <Link
            className="p-2 hover:bg-black hover:text-white hover:rounded-[8px] "
            to={"/contact"}
          >
            Contact
          </Link>
          <Link
            className="p-2 hover:bg-black hover:text-white hover:rounded-[8px] "
            to={"/login"}
          >
            Login
          </Link>
        </div>
        <div className="flex gap-3">
          <CiShoppingCart size={30} className=" hover:cursor-pointer" />
          <CiUser
            size={30}
            className="hidden 800px:block hover:cursor-pointer"
          />
          <RxHamburgerMenu
            size={30}
            className=" 800px:hidden hover:cursor-pointer"
            onClick={() => setIsMobile(true)}
          />
        </div>
        {isMobile && (
          <div
            className="fixed w-full h-screen top-0 left-0 z-[99999] dark:bg-[unset] bg-[#00000024]"
            onClick={handleClose}
            id="screen"
          >
            <div className="fixed w-[70%] z-[99999] h-screen bg-yellow-200 dark:bg-black dark:bg-opacity-90 top-0 right-0">
              <div className="flex flex-col gap-4 items-center justify-between">
                <img
                  src={Logo}
                  alt="Happy Pet Logo"
                  className="w-[120px] mt-4"
                />

                <Link
                  className="p-2 hover:bg-black hover:text-white hover:rounded-[8px] "
                  to={"/"}
                  navitem="true"
                  onClick={handleClose}
                >
                  Home
                </Link>
                <Link
                  className="p-2 hover:bg-black hover:text-white hover:rounded-[8px] "
                  to={"/products"}
                  navitem="true"
                  onClick={handleClose}
                >
                  Products
                </Link>
                <Link
                  className="p-2 hover:bg-black hover:text-white hover:rounded-[8px] "
                  to={"/about"}
                  navitem="true"
                  onClick={handleClose}
                >
                  About
                </Link>
                <Link
                  className="p-2 hover:bg-black hover:text-white hover:rounded-[8px] "
                  to={"/contact"}
                  navitem="true"
                  onClick={handleClose}
                >
                  Contact
                </Link>
                <Link
                  className="p-2 hover:bg-black hover:text-white hover:rounded-[8px] "
                  to={"/login"}
                  navitem="true"
                  onClick={handleClose}
                >
                  Login
                </Link>
              </div>

              <br />
              <br />
              <div className="flex items-center justify-center">
                <p className="px-2 text-[16px] pl-5 text-black dark:text-white">
                  Copyright © 2023 - Pawsome
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
