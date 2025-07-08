import React,{useContext} from "react";
import { IoMdHome } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineCallSplit } from "react-icons/md";
import { BsFillFilePersonFill } from "react-icons/bs";
import Flex from '../../CommonComponent/Flex';
import { NavLink  } from "react-router-dom";




const Menu = () => {

  return (
    <>
      <div className="bg-TopHColor border-t-[1px] border-gray-300">
        <div className="container">
          <div className="hidden md:block">
            <Flex className={"items-center gap-x-10 py-3"}>
              <div className="flex items-center gap-x-1 cursor-pointer">
                <span className="text-sm">
                  <IoMdHome />
                </span>
                <h2 className="font-Montserrat text-sm">Home</h2>
              </div>

              <NavLink to={"/shop"}>
                <div
                  div
                  className="flex items-center gap-x-1 cursor-pointer active:text-CommonColor"
                >
                  <span className="text-xs">
                    <FaShoppingCart />
                  </span>
                  <h2 className="font-Montserrat text-sm">Shop</h2>
                </div>
              </NavLink>
              <div div className="flex items-center gap-x-1 cursor-pointer">
                <span className="text-xs">
                  <BsFillFilePersonFill />
                </span>
                <h2 className="font-Montserrat text-sm">About</h2>
              </div>
              <div div className="flex items-center gap-x-1 cursor-pointer">
                <span className="text-sm">
                  <MdOutlineCallSplit />
                </span>
                <h2 className="font-Montserrat text-sm">Contact Us</h2>
              </div>
            </Flex>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu
