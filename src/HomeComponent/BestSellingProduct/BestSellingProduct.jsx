import React from 'react'
import Card from '../../CommonComponent/Card/Card'
import { useSelector, useDispatch } from 'react-redux'
import Flex from '../../CommonComponent/Flex'
const BestSellingProduct = () => {
  const dispatch = useDispatch();

  const {CartItem} = useSelector((state) =>state.Product);
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
            {CartItem?.map((item) => (
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
            ))}
          </Flex>
        </div>
      </div>
    </>
  );
}

export default BestSellingProduct
