import React from 'react'
import Flex from "../../CommonComponent/Flex"
import CartTotal from './CarTotal/CartTotal';
import CartProducts from '../CartProducts/CartProducts';
const CartItem = () => {
  return (
    <>
      <div className="bg-TopHColor">
        <div className="container">
          <Flex className={"gap-x-4"}>
            <div className="bg-white w-[75%] px-4">
              <div className="pt-8">
                <h2 className="font-Montserrat font-bold text-xl">Cart</h2>
              </div>
              <Flex className={"items-center py-10 w-full"}>
                <div className="basis-1/3 border-[1px] pl-3 font-Montserrat font-semibold py-1">
                  <h2>Product</h2>
                </div>
                <div className="basis-1/4 border-[1px] pl-3 font-Montserrat font-semibold py-1">
                  <h2>Price</h2>
                </div>
                <div className="basis-1/4 border-[1px] pl-3 font-Montserrat font-semibold py-1">
                  <h2>Quantity</h2>
                </div>
                <div className="basis-1/4 border-[1px] pl-3 font-Montserrat font-semibold py-1">
                  <h2>SubTotal</h2>
                </div>
              </Flex>
              {/* Cart Product Item Is Here */}
              <div className="h-[400px] overflow-y-scroll">
                <div>
                  <CartProducts />
                </div>
                <div>
                  <CartProducts />
                </div>
                <div>
                  <CartProducts />
                </div>
                <div>
                  <CartProducts />
                </div>
                <div>
                  <CartProducts />
                </div>
                <div>
                  <CartProducts />
                </div>
                <div>
                  <CartProducts />
                </div>
                <div>
                  <CartProducts />
                </div>
                <div>
                  <CartProducts />
                </div>
              </div>
              {/* Cart Total Item is Here */}
              <div className="px-4 flex flex-col justify-end items-end mt-6">
                <CartTotal />
              </div>
            </div>
            <div className="bg-white w-[20%] px-4">
              <div className="border-2 text-center mt-3">
                <h2>CATEGORIES</h2>
              </div>
              <div>
                <span></span>
                <p>Electronics</p>
              </div>
              <div>
                <span></span>
                <p>Electronics</p>
              </div>
              <div>
                <span></span>
                <p>Electronics</p>
              </div>
              <div>
                <span></span>
                <p>Electronics</p>
              </div>
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
}

export default CartItem
