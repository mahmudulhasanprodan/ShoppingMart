import React from 'react'
import Flex from "../../../CommonComponent/Flex"
import ShopBottom from '../ShopBottom/ShopBottom';
import ShopRight from '../../ShopRight/ShopRight';
import { DropdownShowData } from '../../../../JsonData/JsonData';



const ShopTop = () => {
  
  return (
    <>
      <div className="bg-TopHColor pt-10 pb-10">
        <div className="container">
          <Flex className={"justify-between"}>
            <div className="w-full md:w-[930px] bg-TopHColor md:bg-white px-4 pt-4 pb-4">
              <div>
                <h2 className="font-Montserrat font-semibold text-2xl text-center md:text-start mb-4 md:mb-0">
                  Shop
                </h2>
              </div>
              <Flex
                className={
                  "flex-col md:flex-row gap-y-4 md:gap-y-0 items-center justify-start md:justify-between"
                }
              >
                <div>
                  <p className="font-Montserrat text-sm font-light">
                    Showing 1–16 of 18 results
                  </p>
                </div>
                <div>
                  <select
                    name="ProductShorting"
                    id="ProductShorting"
                    className="w-56 border-[1px] cursor-pointer border-gray-400 py-1"
                  >
                    <option
                      value="Select Item"
                      className="font-Montserrat text-sm font-light"
                    >
                      Select Item
                    </option>
                    {DropdownShowData?.map((item) => (
                      <option
                        value="Womens Products"
                        className="font-Montserrat text-sm font-light"
                      >
                       {item.product}
                      </option>
                    ))}
                  </select>
                </div>
              </Flex>
              <div className="mt-16 w-full md:w-[914px]">
                <ShopBottom />
              </div>
            </div>
            <div className="hidden md:block">
              <ShopRight />
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
}

export default ShopTop
