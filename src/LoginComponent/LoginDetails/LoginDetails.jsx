import React from 'react'
import Flex from '../../CommonComponent/Flex';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";


const LoginDetails = () => {
  return (
    <>
      <div className="bg-TopHColor py-20">
        <div className="container">
          <div className="flex items-center justify-center">
            <div className="w-[400px] h-[400px] bg-gray-200 rounded-lg">
              <Flex className={"flex-col gap-y-4 items-center mt-10"}>
                <div className="">
                  <h2 className="font-Montserrat font-bold text-3xl">Login</h2>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-CommonColor flex items-center justify-center rounded-l-md">
                    <span className="text-white">
                      <FaUser />
                    </span>
                  </div>
                  <div>
                    <input
                      type="Email"
                      id="EmailAddress"
                      name="EmailAddress"
                      placeholder="Enter your email here"
                      className="border-[1px] w-72 h-10 pl-3"
                    />
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-CommonColor flex items-center justify-center rounded-l-md">
                    <span className="text-white">
                      <FaLock />
                    </span>
                  </div>
                  <div>
                    <input
                      type="password"
                      id="LoginPassword"
                      name="LoginPassword"
                      placeholder="passsword"
                      className="border-[1px] w-72 h-10 pl-3"
                    />
                  </div>
                </div>
                <div>
                  <button className="px-10 py-2 bg-CommonColor font-Montserrat font-bold text-white rounded-md">
                    Login here
                  </button>
                </div>
                <div className="flex items-center gap-x-1">
                  <p className="font-Montserrat">Do you have any account?</p>
                  <h3 className="font-Montserrat underline font-medium cursor-pointer">
                    SignUp
                  </h3>
                </div>
                <div>
                  <p className="text-center font-Montserrat">OR</p>
                </div>
                <div className="flex items-center justify-center gap-x-3">
                  <div className="flex items-center gap-x-1 cursor-pointer">
                    <span className="text-3xl">
                      <FcGoogle />
                    </span>
                    <p className="font-Montserrat font-bold">Google</p>
                  </div>
                  <div className="flex items-center gap-x-1 cursor-pointer">
                    <span className="text-3xl text-blue-600">
                      <FaFacebook />
                    </span>
                    <p className="font-Montserrat font-bold">Facebook</p>
                  </div>
                </div>
              </Flex>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginDetails
