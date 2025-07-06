import React from 'react'

const CartTotal = () => {
  return (
    <>
      <div>
        <div>
          <h2 className="font-Montserrat font-bold text-2xl">Cart Totals:</h2>
        </div>
        <div className="w-[300px] py-2 pb-10 flex flex-col justify-center items-center">
          <div className="flex items-center">
            <h2 className="border-[1px] w-32 pl-5 border-gray-400 py-2 font-Montserrat font-medium">
              SubTotal:
            </h2>
            <p className="border-[1px] w-48 pl-5 border-gray-400 py-2 font-Montserrat font-medium">
              $30.00
            </p>
          </div>
          <div className="flex items-center border-2">
            <h2 className="border-[1px] w-32 pl-5 border-gray-400 py-2 font-Montserrat font-medium">
              Total:
            </h2>
            <p className="border-[1px] w-48 pl-5 border-gray-400 py-2 font-Montserrat font-medium">
              $30.00
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartTotal
