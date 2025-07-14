import React, { useEffect, useRef, useState} from 'react'
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
import { GetTotal } from '../../Redux/CartSlice/CartSlice';
import { RemoveItem } from '../../Redux/CartSlice/CartSlice';
import { Link } from 'react-router-dom';

const Header = () => {
 const[menuItem,setmenuItem] = useState(false);
 const[ShowcartMenu,setShowcartMenu] = useState(false);
 const dispatch = useDispatch();
 const CartMenuRef = useRef();
 const ItemRef = useRef();

 

useEffect(() => {
 window.addEventListener("click", (e) => {
   if (CartMenuRef.current && !CartMenuRef.current.contains(e.target)) {
     setShowcartMenu(false);
   }
   if (ItemRef.current && ItemRef.current.contains(e.target)) {
      setShowcartMenu(false)   
   }
 });
 return(() => {
  window.addEventListener("click",() => {})
 })
},[])
 


// HandlemenuItem Function Start Here

const HandleMenuItem = () => {
   setmenuItem(!menuItem);
};


const{CartProduct,TotalItem,TotalAmount}=useSelector((state) => state.Cart);

useEffect(() => {
  dispatch(GetTotal())
},[dispatch,CartProduct]);

// HandleCartMenu Function Start Here
const HandleCartMenu = () => {
  setShowcartMenu(!ShowcartMenu)
}
  
// HandleCartRemove Function Start Her
const HandleCartRemove = (item) => {
  dispatch(RemoveItem(item));   
};
  
  

  return (
    <>
      <div className="bg-TopHColor" ref={CartMenuRef}>
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
                    <div className="text-xl cursor-pointer font-bold relative">
                      <FaRegHeart />
                      <div className="w-6 h-6 bg-gray-300 rounded-full absolute -top-4 -right-3">
                        <h3 className="flex items-center justify-center text-sm h-full text-CommonColor">
                          0
                        </h3>
                      </div>
                    </div>

                    <div className="cursor-pointer relative">
                      <LuShoppingBasket
                        onClick={HandleCartMenu}
                        className={`font-bold text-2xl ${
                          ShowcartMenu && "text-CommonColor"
                        }`}
                      />
                      <div className="w-6 h-6 bg-gray-300 rounded-full absolute -top-4 -right-3">
                        <h3 className="flex items-center justify-center text-sm h-full text-CommonColor font-bold">
                          {TotalItem ? `${TotalItem}` : "0"}
                        </h3>
                      </div>
                      {/* Header Cart Menu is Here */}

                      {ShowcartMenu && (
                        <div
                          className={"absolute z-10 top-[44px] right-0"}
                          ref={ItemRef}
                        >
                          <div className="w-[300px] min-h-[500px] bg-gray-300 px-2">
                            <div className="w-full min-h-[350px] max-h-[450px] overflow-y-scroll">
                              {CartProduct?.map((item) => (
                                <Flex
                                  className={
                                    "items-center gap-x-6 px-4 pt-4 relative border-b-[1px] mt-4 bg-gray-100 border-white pb-2"
                                  }
                                  key={item.id}
                                >
                                  <div>
                                    <picture>
                                      <img
                                        src={item.thumbnail}
                                        alt={item.thumbnail}
                                        className="w-24 h-24 border-2"
                                      />
                                    </picture>
                                    <div
                                      className="absolute top-2 left-1 w-6 h-6 bg-CommonColor rounded-full hover:bg-green-500"
                                      onClick={() => HandleCartRemove(item)}
                                    >
                                      <p className="font-bold text-md flex items-center justify-center text-white font-Montserrat cursor-pointer">
                                        X
                                      </p>
                                    </div>
                                  </div>
                                  <div>
                                    <h2 className="font-Montserrat font-medium text-md">
                                      {item.title
                                        ? `${item.title.slice(0, 12)}..`
                                        : "Title Missing"}
                                    </h2>
                                    <h3>
                                      {item.CartQuantity} X $
                                      {item.CartQuantity * `${Math.round(item.price- Math.round(item.price*item.discountPercentage)/100)}`}
                                    </h3>
                                  </div>
                                </Flex>
                              ))}
                            </div>
                            <div className="w-full h-[150px] pt-6">
                              <div className="flex items-center  gap-x-3 justify-end px-4 mb-6">
                                <h2 className="font-Montserrat font-bold text-xl">
                                  SubTotal:
                                </h2>
                                <p className="font-Montserrat text-xl font-bold text-CommonColor">
                                  {TotalAmount ? `$${TotalAmount}` : "$0"}
                                </p>
                              </div>
                              <div className="flex items-center gap-x-6 justify-center">
                                <Link to={"/cart"}>
                                  <div>
                                    <button className="w-32 py-2 bg-CommonColor text-white hover:bg-[#F77426] font-semibold rounded-md text-md font-Montserrat">
                                      View Cart
                                    </button>
                                  </div>
                                </Link>
                                <Link to={"/checkout"}>
                                  <div>
                                    <button className="w-32 py-2 bg-CommonColor text-white hover:bg-[#F77426]  font-semibold rounded-md text-md font-Montserrat">
                                      Checkout
                                    </button>
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Header Cart Menu is Here */}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <h3 className="font-Montserrat text-md font-semibold">
                    Total:
                  </h3>
                  <p className="font-Montserrat text-sm font-semibold text-CommonColor">
                    {TotalAmount ? `$${TotalAmount}` : "$0.0"}
                  </p>
                </div>
              </Flex>

              <div className="md:hidden">
                <span
                  className="text-xl font-bold cursor-pointer"
                  onClick={HandleMenuItem}
                >
                  {menuItem ? <RxCross2 className="font-bold" /> : <FaBars />}
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
