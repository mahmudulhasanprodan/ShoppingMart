import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const OrderHistory = () => {
  const dispatch = useDispatch();

const{CartProduct,TotalItem,TotalAmount}= useSelector((state) => state.Cart);




  return (
    <>
      <div>
        <div className="p-4">
          <h2 className="font-Montserrat text-2xl font-bold">Your Order</h2>
        </div>
        <div className="flex items-center px-4">
          <div className="border-[1px] pl-3 basis-2/3 bg-gray-400">
            <h2 className="font-Montserrat text-md font-bold py-1 text-white">
              Product
            </h2>
          </div>
          <div className="border-[1px] basis-1/3 pl-3 bg-gray-400">
            <h3 className="font-Montserrat text-md font-bold py-1 text-white">
              Price
            </h3>
          </div>
        </div>
        <div className="h-[250px] overflow-y-scroll border-b-[1px]">
          {CartProduct?.map((item) => (
            <div className="flex items-center px-4 py-1" key={item.id}>
              <div className="flex items-center gap-x-3 border-[1px] basis-2/3 pl-3 py-1">
                <h2>{item.title ? item.title : "No Title"}</h2>
                <h3>X</h3>
                <p>{item.CartQuantity ? item.CartQuantity : "0"}</p>
              </div>
              <div className="border-[1px] basis-1/3 pl-3 py-1">
                <h2>{item.price ? `$${item.price}` : "$0"}</h2>
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="flex items-center justify-center py-6 gap-x-3">
            <h2 className="font-Montserrat text-md">Total Amount:</h2>
            <p className="font-Montserrat text-md">
              {TotalAmount ? `$${TotalAmount}` : "$0"}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <button className="w-72 py-2 bg-CommonColor text-white font-Montserrat font-extralight rounded-sm">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderHistory
