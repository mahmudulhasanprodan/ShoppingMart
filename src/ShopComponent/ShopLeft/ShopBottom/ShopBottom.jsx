import React from 'react'
import Card from "../../../CommonComponent/Card/Card"
import Flex from '../../../CommonComponent/Flex';

const ShopBottom = ({className}) => {
  return (
    <>
      <div>
        <div>
          <Flex className={"items-center flex-wrap gap-x-6 gap-y-6"}>
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
}

export default ShopBottom
