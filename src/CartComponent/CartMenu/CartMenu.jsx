import React from 'react'
import Image from "../../assets/HomeComponentpic/featurepic.jpg"
import Flex from '../../CommonComponent/Flex'
const CartMenu = () => {
  return (
    <>
      <div>
        <div className="w-[300px] h-[350px] bg-gray-300">
            <div className="w-full h-[200px] bg-green-100">
              <Flex className={"items-center gap-x-6 px-4 pt-4 relative"}>
                <div>
                  <picture>
                    <img src={Image} alt={Image} className="w-24 h-24"/>
                  </picture>
                  <div className="absolute top-0">
                    <p>X</p>
                  </div>
                </div>
                <div>
                  <h2>Clothes</h2>
                  <h3>1 X $30 </h3>
                </div>
              </Flex>
            </div>
            <div className="w-full h-[150px] bg-green-300 pt-6">
                <div className="flex items-center  gap-x-3 justify-end px-4 mb-6">
                    <h2 className="font-Montserrat font-bold text-xl">SubTotal:</h2>
                    <p className="font-Montserrat text-xl font-bold">0</p>
                </div>
                <div className="flex items-center gap-x-6 justify-center">
                    <button className="w-32 py-2 bg-CommonColor text-white hover:bg-[#F77426] font-semibold rounded-md text-md font-Montserrat">View Cart</button>
                    <button className="w-32 py-2 bg-CommonColor text-white hover:bg-[#F77426]  font-semibold rounded-md text-md font-Montserrat">Checkout</button>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default CartMenu
