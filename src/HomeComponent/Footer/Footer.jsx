import React from 'react'
import { FaShopify } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { RiSkypeFill } from "react-icons/ri";
import Flex from '../../CommonComponent/Flex';
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="py-10 bg-TopHColor">
        <div className="container">
            <Flex className={"justify-between flex-col md:flex-row gap-y-6 md:gap-y-0 px-4 md-px-0"}>
                <div>
                    <span className="text-3xl text-yellow-600"><FaShopify /></span>
                    <h2 className="font-Montserrat font-bold text-xl text-CommonColor">ShoppingMart</h2>
                </div>
                <div></div>
                <div className="flex flex-col gap-y-3">
                    <div className="flex item-center text-sm gap-x-1 cursor-pointer">
                        <span><FaLocationDot /></span>
                        <p className="font-Montserrat text-md font-light">669/2,Middle Monipur,Dhaka-1260</p>
                    </div>
                    <div className="flex item-center text-sm gap-x-1 cursor-pointer">
                        <span><FaPhone /></span>
                        <p className="font-Montserrat text-sm font-light">01316625624</p>
                    </div>
                     <div className="flex item-center text-sm gap-x-1 cursor-pointer">
                        <span><IoMdMail /></span>
                        <p className="font-Montserrat text-sm font-light">mahmudulhasan8627@gmail.com</p>
                    </div>
                    <div className="flex item-center text-sm gap-x-1 cursor-pointer">
                        <span><RiSkypeFill /></span>
                        <p className="font-Montserrat text-sm font-light">mahmudulhasan</p>
                    </div>
                </div>
                <div className="mt-4 md:mt-0">
                    <h2 className="font-Montserrat text-center md:text-start font-bold text-xl pb-4">Get In Touch</h2>
                    <div className="flex items-center justify-center md:justify-start gap-x-3">
                        <span className="text-2xl cursor-pointer hover:text-CommonColor"><FaFacebookSquare /></span>
                        <span className="text-2xl cursor-pointer hover:text-CommonColor"><FaLinkedin /></span>
                        <span className="text-2xl cursor-pointer hover:text-CommonColor"><FaGithubSquare /></span>
                    </div>
                </div>
            </Flex>
        </div>
      </div>
    </>
  )
}

export default Footer
