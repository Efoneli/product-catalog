import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { BsCart, BsForwardFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "../img/logo.svg";
import { SignUpContext } from "../contexts/SignUpContext";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const { loggedinUser, logOut } = useContext(SignUpContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to={"/"}>
          <div>
            <img className="w-[35px]" src={Logo} alt="" />
          </div>
        </Link>   

        <div className="flex items-center justify-center">
          {loggedinUser === null ? (
            <div className="px-1">
              <Link to="/signup">SignUp</Link>
            </div>
          ) : (
            loggedinUser.email
          )}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer flex relative max-w-[50px] px-1"
          >
            <BsCart className="text-2xl" />
            <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
              {itemAmount}
            </div>
          </div>
          <div
            className="mx-4"
            onClick={() => {
              logOut();
            }}
          >
            <BsForwardFill />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
