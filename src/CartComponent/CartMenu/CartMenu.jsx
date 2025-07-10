import React, { useEffect, useRef, useState } from 'react'
import Image from "../../assets/HomeComponentpic/featurepic.jpg"
import Flex from '../../CommonComponent/Flex'
import { useSelector, useDispatch } from 'react-redux'
import { RemoveItem } from '../../Redux/CartSlice/CartSlice'
import { Link } from 'react-router-dom'

const CartMenu = () => {
const dispatch = useDispatch();
const{CartProduct,TotalItem,TotalAmount}= useSelector((state) => state.Cart);

  
// HandleCartRemove Function Start Her
const HandleCartRemove = (item) => {
dispatch(RemoveItem(item))
};
  

  return (
    <>
      <div>
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
                    <p className="font-bold text-md flex items-center justify-center text-white font-Montserrat">
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
                    {Math.round(item.CartQuantity * item.price)}{" "}
                  </h3>
                </div>
              </Flex>
            ))}
          </div>
          <div className="w-full h-[150px] pt-6">
            <div className="flex items-center  gap-x-3 justify-end px-4 mb-6">
              <h2 className="font-Montserrat font-bold text-xl">SubTotal:</h2>
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
    </>
  );
}

export default CartMenu
