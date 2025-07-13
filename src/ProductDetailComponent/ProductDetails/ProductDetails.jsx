import React, { useEffect, useState } from 'react'
import img from "../../assets/HomeComponentpic/featurepic.jpg"
import Flex from '../../CommonComponent/Flex'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { ProductData } from '../../Redux/ProductSlice/ProductSlice'
import { AllCartItem } from '../../Redux/CartSlice/CartSlice'


const ProductDetails = () => {

const dispatch = useDispatch();
const {ProductId} = useParams();
const Navigate = useNavigate();


//Data Feacthing Is Here
useEffect(() => {
  const DataFetcher = async () => {
    const FetchData = await axios.get(`https://dummyjson.com/products/${ProductId}`); 
    dispatch(ProductData(FetchData.data));
      
  }
  DataFetcher();
},[]);


const{CartItem}=useSelector((state) => state.Product);


// HandleCart Function Start Here
const HandleCart = () => {
   dispatch(AllCartItem(CartItem))
};



  return (
    <>
      <div>
        <div className="container">
          <Flex className={"gap-x-6 py-10"}>
            {CartItem.images?.map((img) => (
              <div key={img.images}>
                <picture>
                  <img
                    src={img}
                    alt={img}
                    className="border-2 w-[400px] h-[400px]"
                  />
                </picture>
              </div>
            ))}

            <div className="flex flex-col gap-y-5">
              <div>
                <h2 className="font-Montserrat font-semibold text-2xl mb-3">
                  {CartItem.title ? CartItem.title : "Title Missing"}
                </h2>
                <p className="font-Montserrat font-bold text-xl">
                  $
                  {Math.round(CartItem.price) -
                    Math.round(CartItem.price) *
                      (Math.round(CartItem.discountPercentage) / 100)}{" "}
                  <del className="text-gray-400">
                    {CartItem.price
                      ? `$${Math.round(CartItem.price)}`
                      : "$30.00"}
                  </del>
                </p>
              </div>
              <Flex className={"items-center gap-x-6"}>
                <div className="flex items-center gap-x-3">
                  <span className="border-[1px] w-8 h-8 font-bold cursor-pointer text-center text-xl">
                    -
                  </span>
                  <p className="font-Montserrat text-md">1</p>
                  <span className="border-[1px] w-8 h-8 cursor-pointer text-center font-bold text-xl">
                    +
                  </span>
                </div>
                <div>
                  <button
                    className="px-6 py-2 bg-CommonColor font-Montserrat text-white text-md font-light"
                    onClick={HandleCart}
                  >
                    Add To Cart
                  </button>
                </div>
                <div>
                  <button className="px-6 py-2 bg-[#F77426] font-Montserrat text-white text-md font-light">
                    Buy Now
                  </button>
                </div>
              </Flex>
              <div className="flex items-center gap-x-2">
                <h2 className="font-Montserrat font-semibold">Catagories:</h2>
                <p className="font-Montserrat font-light">
                  {CartItem.category ? CartItem.category : "Mixed"}
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <h2 className="font-Montserrat font-semibold">Tag:</h2>
                <p className="font-Montserrat font-light">
                  {CartItem.tags ? CartItem.tags : "No Tag"}
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <h2 className="font-Montserrat font-semibold">Brand:</h2>
                <p className="font-Montserrat font-light">Apple</p>
              </div>
            </div>
          </Flex>
          <div>
            <h2 className="border-b-[1px] mb-10">Description</h2>
            <p>
              {CartItem.description
                ? CartItem.description
                : "Desicription Missing"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails

