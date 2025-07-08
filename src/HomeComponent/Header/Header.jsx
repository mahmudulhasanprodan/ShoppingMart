import React, { useState} from 'react'
import { FaShopify } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingBasket } from "react-icons/lu";
import Flex from '../../CommonComponent/Flex';
import { IoSearch } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineCallSplit } from "react-icons/md";
import { BsFillFilePersonFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { useSelector, useDispatch } from 'react-redux'


const Header = () => {
 const[menuItem,setmenuItem] = useState(false);
 const dispatch = useDispatch();

// HandlemenuItem Function Start Here

const HandleMenuItem = () => {
   setmenuItem(!menuItem);
};




  return (
    <>
      <div className="bg-TopHColor">
        <div className="container">
          <div className="flex items-center justify-between py-4 px-4">
            <div className="flex items-center gap-x-1 cursor-pointer">
              <span className="text-5xl font-bold text-yellow-600">
                <FaShopify />
              </span>
              <h3 className="font-Montserrat font-bold text-CommonColor text-2xl">
                ShoppingMart
              </h3>
            </div>
            <Flex className={"items-center gap-x-10"}>
              <div className="flex items-center">
                <div className="hidden md:block">
                  <input
                    type="text"
                    placeholder="Search Products"
                    id="ProductSearch"
                    name="ProductSearch"
                    className="border-2 border-CommonColor md:w-[260px] xl:w-[400px] py-1 pl-3"
                  />
                </div>
                <div className="w-20 h-[36px] bg-CommonColor cursor-pointer hidden md:block">
                  <span className="flex items-center justify-center h-full text-white font-bold text-xl">
                    <IoSearch />
                  </span>
                </div>
              </div>
              <Flex className={"items-center gap-x-5"}>
                <div className="hidden md:block">
                  <div className="flex items-center gap-x-4">
                    <span className="text-xl cursor-pointer font-bold relative">
                      <FaRegHeart />
                       <div className="w-6 h-6 bg-gray-300 rounded-full absolute -top-4 -right-3">
                        <h3 className="flex items-center justify-center text-sm h-full text-CommonColor">1</h3>
                      </div>
                    </span>
                    <span className="text-2xl cursor-pointer font-bold relative">
                      <LuShoppingBasket />
                      <div className="w-6 h-6 bg-gray-300 rounded-full absolute -top-4 -right-3">
                        <h3 className="flex items-center justify-center text-sm h-full text-CommonColor">1</h3>
                      </div>
                    </span>
                  </div>
                </div>
                <div className="hidden md:block">
                  <h3 className="font-Montserrat text-md font-semibold">
                    Total:
                  </h3>
                  <p className="font-Montserrat text-sm">$00.00</p>
                </div>
              </Flex>

              <div className="md:hidden">
                <span
                  className="text-xl font-bold cursor-pointer"
                  onClick={HandleMenuItem}
                >
                  {menuItem ? <RxCross2 className="font-bold"/> :  <FaBars />}
               
                </span>
                {/* DropDown Menu */}
                {menuItem && (
                  <div
                    className={`md:hidden absolute w-[200px] h-[400px] bg-gray-700 top-[80px] -right-[1000px]  ${
                      menuItem && "right-[0px]"
                    }`}
                  >
                    <div className={"flex flex-col gap-y-4"}>
                      <div className="flex items-center gap-x-1 cursor-pointer hover:bg-slate-300 py-2 justify-center text-white">
                        <span className="text-sm">
                          <IoMdHome />
                        </span>
                        <h2 className="font-Montserrat text-sm">Home</h2>
                      </div>
                      <div
                        div
                        className="flex items-center gap-x-1 cursor-pointer hover:bg-slate-300 py-2 justify-center text-white"
                      >
                        <span className="text-xs">
                          <FaShoppingCart />
                        </span>
                        <h2 className="font-Montserrat text-sm">Shop</h2>
                      </div>
                      <div
                        div
                        className="flex items-center gap-x-1 cursor-pointer hover:bg-slate-300 py-2 justify-center text-white"
                      >
                        <span className="text-xs">
                          <BsFillFilePersonFill />
                        </span>
                        <h2 className="font-Montserrat text-sm">About</h2>
                      </div>
                      <div
                        div
                        className="flex items-center gap-x-1 cursor-pointer hover:bg-slate-300 py-2 justify-center text-white"
                      >
                        <span className="text-sm">
                          <MdOutlineCallSplit />
                        </span>
                        <h2 className="font-Montserrat text-sm">Contact Us</h2>
                      </div>
                    </div>
                  </div>
                )}
                {/* DropDown Menu */}
              </div>
            </Flex>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header
