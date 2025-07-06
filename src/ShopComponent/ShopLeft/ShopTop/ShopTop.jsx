import React from 'react'
import Flex from "../../../CommonComponent/Flex"
import ShopBottom from '../ShopBottom/ShopBottom';
import ShopRight from '../../ShopRight/ShopRight';

const ShopTop = () => {
  return (
    <>
      <div className="bg-TopHColor pt-10 pb-10">
        <div className="container">
          <Flex className={"justify-between"}>
            <div className="w-[930px] bg-white px-4 pt-4 pb-4">
              <div>
                <h2 className="font-Montserrat font-semibold text-2xl">Shop</h2>
              </div>
              <Flex className={"items-center justify-between"}>
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
                    <option
                      value="Womens Products"
                      className="font-Montserrat text-sm font-light"
                    >
                      Womens Products
                    </option>
                    <option
                      value="Men's Product"
                      className="font-Montserrat text-sm font-light"
                    >
                      Men's Product
                    </option>
                    <option
                      value="Baby & Kids"
                      className="font-Montserrat text-sm font-light"
                    >
                      Baby & Kids
                    </option>
                    <option value="Electrical & Electronics">
                      Electrical & Electronics
                    </option>
                  </select>
                </div>
              </Flex>
              <div className="mt-16 w-[914px]">
                <ShopBottom />
              </div>
            </div>
            <div>
              <ShopRight />
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
}

export default ShopTop
