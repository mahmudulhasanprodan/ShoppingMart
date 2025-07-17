import React from 'react'
import image from "../../assets/HomeComponentpic/Rocket.png"
const ProductComment = () => {
  return (
    <>
      <div className="flex gap-x-3 pb-4">
        <div>
          <picture>
            <img src={image} alt={image} className="w-10 h-10 rounded-full" />
          </picture>
        </div>
        <div className="w-2/3">
          <h2 className="font-Montserrat text-base font-semibold">Mahmudul</h2>
          <p className="font-Montserrat text-sm font-normal text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit..
          </p>
        </div>
      </div>
    </>
  );
}

export default ProductComment
