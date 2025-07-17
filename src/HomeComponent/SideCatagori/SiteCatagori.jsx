import React from 'react'
import { FaBars } from "react-icons/fa6";
import { GoSquareFill } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";
import SliderPart from '../Slider/SliderPart';
import Flex from "../../CommonComponent/Flex"

const SiteCatagori = () => {
  return (
    <>
      <div className="bg-TopHColor">
        <div className="container">
           <Flex className={"gap-x-4 px-4 xl:px-0"}>
             <div className="w-full xl:w-[20%] h-[500px] bg-white hidden md:block">
               <div className="flex gap-x-3 items-center pl-2 pt-2 cursor-pointer">
                 <span className="font-bold text-xl"><FaBars /></span>
                 <h2 className="font-Montserrat font-bold text-2xl">All Products</h2>
               </div>
               <div className="flex flex-col gap-y-3 mt-4 pl-3">
                 <div className="flex items-center gap-x-2  border-b-[1px] border-gray-300 cursor-pointer">
                    <span className="text-CommonColor text-xs pb-2"><GoSquareFill /></span>
                    <h3 className="font-Roboto text-md leading-tight text-gray-500 pb-2">Electronics</h3>
                    <h4 className="pl-28 pb-2 font-bold"><MdKeyboardArrowRight /></h4>
                 </div>
                 <div className="flex items-center gap-x-2 border-b-[1px] border-gray-300">
                    <span className="text-CommonColor text-xs pb-2"><GoSquareFill /></span>
                    <h3 className="font-Roboto text-md leading-tight text-gray-500 cursor-pointer pb-2">Womens Fashion</h3>
                 </div>
                 <div className="flex items-center gap-x-2 border-b-[1px] border-gray-300">
                    <span className="text-CommonColor text-xs pb-2"><GoSquareFill /></span>
                    <h3 className="font-Roboto text-md leading-tight text-gray-500 cursor-pointer pb-2">Babies & Toys</h3>
                 </div>
                 <div className="flex items-center gap-x-2 border-b-[1px] border-gray-300">
                    <span className="text-CommonColor text-xs"><GoSquareFill /></span>
                    <h3 className="font-Roboto text-md leading-tight text-gray-500 cursor-pointer pb-2">Home & LifeStyle</h3>
                 </div>
                 <div className="flex items-center gap-x-2 border-b-[1px] border-gray-300">
                    <span className="text-CommonColor text-xs pb-2"><GoSquareFill /></span>
                    <h3 className="font-Roboto text-md leading-tight text-gray-500 cursor-pointer pb-2">Men's Fashion</h3>
                 </div>
                 <div className="flex items-center gap-x-2 border-b-[1px] border-gray-300">
                    <span className="text-CommonColor text-xs pb-2"><GoSquareFill /></span>
                    <h3 className="font-Roboto text-md leading-tight text-gray-500 cursor-pointer pb-2">Watches & Accessories</h3>
                 </div>
                 <div className="flex items-center gap-x-2 border-b-[1px] border-gray-300">
                    <span className="text-CommonColor text-xs pb-2"><GoSquareFill /></span>
                    <h3 className="font-Roboto text-md leading-tight text-gray-500 cursor-pointer pb-2">Clothing</h3>
                 </div>
               </div>
            </div>
            <div className="w-[60%] realative hidden md:block">
               <SliderPart />
            </div>
           </Flex>
        </div>
      </div>
    </>
  )
}

export default SiteCatagori
