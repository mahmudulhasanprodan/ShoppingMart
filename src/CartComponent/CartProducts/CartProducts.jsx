import React from 'react'
import Flex from '../../CommonComponent/Flex'
import pic from "../../assets/HomeComponentpic/featurepic.jpg"
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const CartProducts = () => {
  return (
    <>
      <div className="pb-4">
        <Flex className={"items-center"}>
          <div className="flex items-center basis-1/3 pl-3 font-Montserrat font-semibold">
             <picture>
            <img src={pic} alt={pic} className="w-16 h-16 border-2 shadow-lg cursor-pointer"/>
             </picture>
            <h2 className="font-Montserrat text-sm pl-3">Clothing wear</h2>
          </div>
          <div className="basis-1/4 pl-3 font-Montserrat font-semibold">
            <p>$30.00</p>
          </div>
          <div className="basis-1/4 pl-3 font-Montserrat font-semibold py-4 flex items-center gap-x-3">
            <span className="cursor-pointer font-bold border-2 px-2 py-1 border-gray-500"><FaMinus /></span>
            <p className="font-Montserrat font-bold text-xl">1</p>
            <span className="cursor-pointer font-bold border-2 px-2 py-1 border-gray-500"><FaPlus /></span>
          </div>
          <div className="basis-1/4 pl-3 font-Montserrat font-semibold relative flex">
            <h3>$30.00</h3>
            <p className="absolute right-3 cursor-pointer text-red-500">X</p>
          </div>
        </Flex>
      </div>
    </>
  );
}

export default CartProducts
