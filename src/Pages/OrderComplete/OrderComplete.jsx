import React from 'react'
import { ImCheckmark } from "react-icons/im";
import { MdArrowBack } from "react-icons/md";



const OrderComplete = () => {
  return (
    <>
      <div className="bg-TopHColor">
        <div className="container">
          <div className="flex flex-col items-center justify-center gap-y-4 py-20">
            <div className="w-16 h-16 bg-green-500 rounded-full">
              <div className="flex items-center justify-center h-full">
                <span className="text-white font-bold text-5xl">
                  <ImCheckmark />
                </span>
              </div>
            </div>
            <div>
              <p className="font-Montserrat font-bold text-2xl">
                Your Order Has Been Completed
              </p>
            </div>
            <div>
              <button className="px-3 py-2 flex items-center gap-x-1 bg-CommonColor text-white font-Montserrat font-light rounded-md">
                <span>
                  <MdArrowBack />
                </span>
                Back to shop
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderComplete

