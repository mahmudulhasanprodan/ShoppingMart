import React from 'react'
import { GrBasket } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import Flex from "../../CommonComponent/Flex"
import Pic from "../../assets/HomeComponentpic/featurepic.jpg"

const Card = () => {
  return (
    <>
      <div>
        <div className="w-[250px] h-[370px] bg-white shadow-lg">
          <div className="w-full h-[200px] bg-green-300 border-b-[2px] border-b-gray-400 cursor-pointer">
            <picture>
              <img
                src={Pic}
                alt={Pic}
                className="w-full h-[200px] overflow-scroll"
              />
            </picture>
          </div>
          <div className="flex flex-col items-center justify-center mt-4">
            <h2 className="font-Montserrat font-light text-md">Clothes</h2>
            <p className="font-Montserrat text-md mt-2 text-CommonColor font-semibold">
              $44.00 <del className="text-gray-400">$50.00</del>
            </p>
          </div>
          <Flex className={"justify-center mt-4"}>
            <div>
              <button className="px-3 py-1 border-[1px] border-gray-400 flex items-center gap-x-2 font-Montserrat hover:bg-CommonColor hover:text-white">
                <span>
                  <GrBasket />
                </span>
                Add To Cart
              </button>
            </div>
            <div>
              <button className="px-2 py-3 border-[1px] border-gray-400 flex items-center gap-x-2 font-Montserrat hover:bg-CommonColor hover:text-white">
                <span>
                  <FaRegHeart />
                </span>
                Wish
              </button>
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
}

export default Card
