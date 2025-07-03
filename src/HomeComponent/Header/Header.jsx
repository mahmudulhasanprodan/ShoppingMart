import React from 'react'
import { FaShopify } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingBasket } from "react-icons/lu";
import Flex from '../../CommonComponent/Flex';
import { IoSearch } from "react-icons/io5";
import { FaBars } from "react-icons/fa";


const Header = () => {
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
                    <span className="text-xl cursor-pointer font-bold">
                      <FaRegHeart />
                    </span>
                    <span className="text-2xl cursor-pointer font-bold">
                      <LuShoppingBasket />
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
                <span className="text-xl font-bold cursor-pointer">
                  <FaBars />
                </span>
              </div>
            </Flex>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header
