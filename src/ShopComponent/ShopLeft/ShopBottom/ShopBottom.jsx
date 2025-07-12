import React, { useEffect, useState } from 'react'
import Card from "../../../CommonComponent/Card/Card"
import Flex from '../../../CommonComponent/Flex';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { FeatureProduct } from '../../../Redux/ProductSlice/ProductSlice';
import Loading from '../../../CommonComponent/Loading/Loading';
import { FaChevronCircleRight,FaChevronCircleLeft} from "react-icons/fa";



const ShopBottom = () => {
const dispatch = useDispatch()
const[allData,setallData] = useState([]);
const[page,setpage]= useState(1);
const dataLength = allData?.length ?? 0;


useEffect(() => {
    dispatch(FeatureProduct("https://dummyjson.com/products"));  
},[])

const{CartItem,Status}= useSelector((state) => state.Product);


useEffect(() => {
   if(Status === "IDLE"){
    setallData(CartItem. products)
   }
},[Status,CartItem.products])

// HandlePagination Function Start Here
const HandlePagination = (pageNumber) => {
  if(pageNumber > 0 && pageNumber <= Math.floor(dataLength/9) + 1){
    setpage(pageNumber)
  } 
};




  return (
    <>
      <div>
        <div>
          <Flex
            className={
              "items-center justify-center md:justify-start flex-wrap gap-x-6 gap-y-6"
            }
          >
            {allData?.slice(page * 9 - 9, page * 9).map((item) => (
              <Link to={`/productdetails/${item.id}`}>
                <div key={item.id}>
                  <Card
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
              </Link>
            ))}
          </Flex>
          {/* Pagination is here */}
          <div>
            <div className="flex items-center justify-end gap-x-3 py-10 w-[90%]">
              <div>
                <span className="text-3xl cursor-pointer text-CommonColor active:text-green-500" onClick={() => HandlePagination(page - 1)}>
                  <FaChevronCircleLeft />
                </span>
              </div>
              <div className="flex items-center gap-x-2">
                {[
                  ...new Array(
                    Math.floor(
                      Math.floor(dataLength / 9) <= dataLength / 9
                        ? Math.floor(dataLength / 9) + 1
                        : Math.floor(dataLength / 9)
                    )
                  ),
                ].map((_, index) => (
                  <div key={index}>
                    <p
                      className={`w-10 h-10 bg-black cursor-pointer  flex rounded-sm items-center justify-center text-white font-bold text-xl ${
                        page == index + 1 && "bg-[#B71B1B]"
                      }`}
                      onClick={() => HandlePagination(index + 1)}
                    >
                      {index + 1}
                    </p>
                  </div>
                ))}
              </div>
              <div>
                <span className="text-3xl cursor-pointer text-CommonColor active:text-green-500" onClick={() => HandlePagination(page + 1)}>
                  <FaChevronCircleRight />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopBottom
