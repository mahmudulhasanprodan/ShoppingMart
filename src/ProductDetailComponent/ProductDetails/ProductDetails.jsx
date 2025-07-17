import React, { useEffect, useState } from 'react'
import img from "../../assets/HomeComponentpic/featurepic.jpg"
import Flex from '../../CommonComponent/Flex'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ProductData } from '../../Redux/ProductSlice/ProductSlice'
import { AllCartItem } from '../../Redux/CartSlice/CartSlice'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { FaArrowRight,FaArrowLeft } from "react-icons/fa6";
import ProductComment from '../ProductComment/ProductComment'
import BillingForm from '../../CommonComponent/BillingForm/BillingForm'
import { Increment,Decrement } from '../../Redux/CartSlice/CartSlice'




const ProductDetails = () => {

const dispatch = useDispatch();
const {ProductId} = useParams();
const Navigate = useNavigate();
const[ZoomImage,setZoomImage] = useState(false)


//Data Feacthing Is Here
useEffect(() => {
  const DataFetcher = async () => {
    const FetchData = await axios.get(`https://dummyjson.com/products/${ProductId}`); 
    dispatch(ProductData(FetchData.data));
      
  }
  DataFetcher();
},[]);


const{CartItem}=useSelector((state) => state.Product);

console.log(CartItem);



// HandleCart Function Start Here
const HandleCart = () => {
   dispatch(AllCartItem(CartItem))
};
///HandleZoomClick Function is Here
const HandleZoomClick = () => {
  setZoomImage(!ZoomImage);
};
/// Slider Function is Here
const slideCount = CartItem.images?.length || 0;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#F0F0F0	",
        width: "40px",
        height: "40px",
        position: "absolute",
        right: "-20px",
        zIndex: "1",
        top: "50%",
        transform: "translateY(-90%)",
        cursor: "pointer",
        borderRadius: "100%",
      }}
      onClick={onClick}
    >
      <p className="flex items-center justify-center h-full">
        <FaArrowRight />
      </p>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#F0F0F0",
        width: "40px",
        height: "40px",
        position: "absolute",
        left: "-20px",
        top: "50%",
        zIndex: "1",
        transform: "translateY(-90%)",
        cursor: "pointer",
        borderRadius: "100%",
      }}
      onClick={onClick}
    >
      <p className="flex items-center justify-center h-full">
        <FaArrowLeft />
      </p>
    </div>
  );
}
 const settings = {
    dots: false,
    infinite: slideCount > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

/// HandleDecriment Function Start Here
const HandleDecriment = (item) => {
 
  
};

//HandleIncriment Function is Here
const HandleIncriment = (item) => {
 
};

  return (
    <>
      <div>
        <div className="container">
          <Flex className={"gap-x-10 py-10"}>
            <div className="w-[400px]">
              <Slider {...settings}>
                {CartItem.images?.map((img, index) => (
                  <div key={index} className="relative">
                    <Zoom>
                      <picture>
                        <img
                          src={img}
                          alt={img}
                          className="border-2 w-[400px] h-[400px]"
                        />
                      </picture>
                    </Zoom>
                  </div>
                ))}
              </Slider>
            </div>

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
                  <span
                    className="border-[1px] w-8 h-8 font-bold cursor-pointer text-center text-xl"
                    onClick={() => HandleDecriment(CartItem)}
                  >
                    -
                  </span>
                  <p className="font-Montserrat text-md">1</p>
                  <span
                    className="border-[1px] w-8 h-8 cursor-pointer text-center font-bold text-xl"
                    onCanPlay={() => HandleIncriment(CartItem)}
                  >
                    +
                  </span>
                </div>
                <div>
                  <button
                    className="px-6 py-2 bg-CommonColor font-Montserrat text-white text-md font-light hover:bg-green-500"
                    onClick={HandleCart}
                  >
                    Add To Cart
                  </button>
                </div>
                <div>
                  <Link to={"/checkout"}>
                    <button className="px-6 py-2 bg-[#F77426] font-Montserrat text-white text-md font-light active:bg-green-500">
                      Buy Now
                    </button>
                  </Link>
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
                  {CartItem.tags ? `${CartItem.tags},` : "No Tag"}
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <h2 className="font-Montserrat font-semibold">Sku:</h2>
                <p className="font-Montserrat font-light">
                  {CartItem.sku ? `"${CartItem.sku}"` : "Missing"}
                </p>
              </div>
            </div>
          </Flex>
          <div>
            <h2 className="border-b-[1px] mb-10 font-Montserrat font-bold text-xl">
              Description
            </h2>
            <p className="font-Montserrat w-3/2 text-justify font-bold text-base w-2/3">
              {CartItem.description
                ? CartItem.description
                : "Desicription Missing"}
            </p>
          </div>
          <div className="py-20">
            <ProductComment />
          </div>
          <div className="py-20">
            <div className="flex flex-col gap-y-4">
              <div>
                <BillingForm
                  labelItem={"Full Name"}
                  className={"font-Montserrat font-bold text-base pb-2"}
                  InputType={"text"}
                  InputPlaceholder={"Enter your Name"}
                  InputId={"Name"}
                  InputClass={"border-b-[1px] w-96 py-1"}
                />
              </div>
              <div>
                <label
                  htmlFor="Messege"
                  className="font-Montserrat font-bold text-base"
                >
                  Your Comment
                </label>
                <div className="mt-2">
                  <textarea
                    name="InputMessege"
                    id="InputMessege"
                    placeholder="Messege here"
                    className="min-h-44 border-[1px] w-96"
                  ></textarea>
                </div>
              </div>
              <div>
                <button className="font-Montserrat font-bold bg-CommonColor px-4 py-2 text-white rounded-md">
                  Add Comment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails

