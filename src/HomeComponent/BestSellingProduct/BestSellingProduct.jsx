import React, { useEffect, useRef, useState } from 'react'
import Card from '../../CommonComponent/Card/Card'
import { useSelector, useDispatch } from 'react-redux'
import Flex from '../../CommonComponent/Flex'
import { FeatureProduct } from '../../Redux/ProductSlice/ProductSlice'
import { AllCartItem } from '../../Redux/CartSlice/CartSlice'
import Loading from '../../CommonComponent/Loading/Loading'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { WishCartItem} from '../../Redux/WishSlice/WishSlice'

const BestSellingProduct = () => {
  const dispatch = useDispatch();
  const[featureData,setfeatureData] =useState([]);
  const Navigate = useNavigate();

  

  useEffect(() => {
    dispatch(FeatureProduct("https://dummyjson.com/products"));
  },[])

  
const{CartItem,Status} = useSelector((state) => state.Product);



useEffect(() => {
  if(Status === "IDLE"){
    setfeatureData(CartItem.products)
  }
},[Status,CartItem.products])




// HandleCart Function Start Here
const HandleCart = (item) => {
  dispatch(AllCartItem(item));
};

//HandleProduct Function Start Here
const HandleProduct = (item) => {
  Navigate(`/productdetails/${item.id}`);
};

//HandleWish Function Start Here
const HandleWish = (item) => {
  dispatch(WishCartItem(item))
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
          <div>
            {Status === "LOADING" ? (
              <Loading className={"w-[250px] h-[370px]"} />
            ) : (
              ""
            )}
          </div>
          <Flex className={"items-center flex-wrap justify-between gap-y-4"}>
            {featureData?.map((item) => (
              <div key={item.id}>
                <div>
                  <Card
                    ProductDetails={() => HandleProduct(item)}
                    CartProduct={() => HandleCart(item)}
                    WishProduct={() => HandleWish(item)}
                    FeatueImage={item.thumbnail}
                    Title={`${item.title.slice(0, 16)}....`}
                    MainPrice={`$${Math.round(item.price)}`}
                    Price={`$${
                      Math.round(item.price) -
                      Math.round(item.price) *
                        (Math.round(item.discountPercentage) / 100)
                    }`}
                  />
                </div>
              </div>
            ))}
          </Flex>
        </div>
      </div>
    </>
  );
}

export default BestSellingProduct
