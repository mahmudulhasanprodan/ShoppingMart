import React, { useEffect, useState } from 'react'
import Card from "../../../CommonComponent/Card/Card"
import Flex from '../../../CommonComponent/Flex';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { ProductData } from '../../../Redux/ProductSlice/ProductSlice';

const ShopBottom = () => {
  const dispatch = useDispatch()
  const[allData,setallData] = useState([]);

useEffect(() => {
  const DataFetcher = async () => {
    const FetchData = await axios.get("https://dummyjson.com/products");
    dispatch(ProductData(FetchData.data.products));
    setallData(FetchData.data.products);  
  }
  DataFetcher();
});


  return (
    <>
      <div>
        <div>
          <Flex
            className={
              "items-center justify-center md:justify-start flex-wrap gap-x-6 gap-y-6"
            }
          >
            {allData?.map((item) => (
              <div key={item.id}>
                <Card
                  FeatueImage={item.thumbnail}
                  Title={`${item.title.slice(0, 16)}....`}
                  MainPrice={`$${Math.round(item.price)}`}
                  Price={`${Math.round(item.price)-Math.round(item.price)*(Math.round(item.discountPercentage)/100)}`}
                />
              </div>
            ))}
          </Flex>
        </div>
      </div>
    </>
  );
}

export default ShopBottom
