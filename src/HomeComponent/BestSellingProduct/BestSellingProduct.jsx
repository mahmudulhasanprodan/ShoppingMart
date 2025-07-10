import React, { useEffect, useState } from 'react'
import Card from '../../CommonComponent/Card/Card'
import { useSelector, useDispatch } from 'react-redux'
import Flex from '../../CommonComponent/Flex'
import { ProductData } from '../../Redux/ProductSlice/ProductSlice'
import { AllCartItem } from '../../Redux/CartSlice/CartSlice'



import axios from 'axios'

const BestSellingProduct = () => {
  const dispatch = useDispatch();
  const[featureData,setfeatureData] =useState([]);

  useEffect(() => {
    const DataFetcher = async () => {
      const FetchData = await axios.get("https://dummyjson.com/products");
      dispatch(ProductData(FetchData.data.products));
      setfeatureData(FetchData.data.products);  
    }
    DataFetcher();
  },[]);
  
const {CartItem} = useSelector((state) =>state.Product);

// HandleCart Function Start Here
const HandleCart = (item) => {
  dispatch(AllCartItem(item));
};


  return (
    <>
      <div className="bg-TopHColor py-10 pb-40">
        <div className="container">
          <div className="py-6">
            <h2 className="font-Montserrat text-2xl font-bold">
              Best Selling Products
            </h2>
          </div>
          <Flex className={"items-center flex-wrap justify-between gap-y-4"}>
            {featureData?.map((item) => (
              <div key={item.id}>
                <Card
                CartProduct={() => HandleCart(item)}
                  FeatueImage={item.thumbnail}
                  Title={`${item.title.slice(0, 16)}....`}
                  MainPrice={`$${Math.round(item.price)}`}
                  Price={`${
                    Math.round(item.price) -
                    Math.round(item.price) *
                      (Math.round(item.discountPercentage) / 100)
                  }`}
                />
              </div>
            ))}
          </Flex>
        </div>
      </div>
    </>
  );
}

export default BestSellingProduct
