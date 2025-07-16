import React from 'react'
import BillingForm from '../../CommonComponent/BillingForm/BillingForm';
import Flex from '../../CommonComponent/Flex';
import { FaShopify } from "react-icons/fa6";

const SignUp = () => {
  return (
    <>
      <div className="bg-TopHColor">
        <div className="container">
          <Flex className={"py-20"}>
            <div className="w-1/2 bg-white py-10 px-4 shadow-lg">
              <div className="pb-10 py-2">
                <h2 className="font-Montserrat font-bold text-2xl pb-1">HELLO!</h2>
                <p className="font-Montserrat text-sm font-light text-gray-400">Sign up to continue</p>
              </div>
              <form action="#">
                <div className="flex flex-col gap-y-3">
                  <div>
                    <BillingForm
                      className={"font-Montserrat font-bold text-slate-700"}
                      labelItem={"Full Name"}
                      InputType={"text"}
                      InputPlaceholder={"John Doe"}
                      InputId={"FullName"}
                      InputClass="border-b-[1px] w-96 py-1"
                    />
                  </div>
                  <div>
                    <BillingForm
                      className={"font-Montserrat font-bold text-slate-700"}
                      labelItem={"Email Address"}
                      InputType={"email"}
                      InputPlaceholder={"johndoe@gmail.com"}
                      InputId={"EmailAddress"}
                      InputClass="border-b-[1px] w-96 py-1"
                    />
                  </div>
                  <div>
                    <BillingForm
                      className={"font-Montserrat font-bold text-slate-700"}
                      labelItem={"Password"}
                      InputType={"password"}
                      InputPlaceholder={"Password"}
                      InputId={"Password"}
                      InputClass="border-b-[1px] w-96 py-1"
                    />
                  </div>
                  <div>
                    <BillingForm
                      className={"font-Montserrat font-bold text-slate-700"}
                      labelItem={"Repeat Password"}
                      InputType={"Password"}
                      InputPlaceholder={"Confirm Password"}
                      InputId={"RepeatPassword"}
                      InputClass="border-b-[1px] w-96 py-1"
                    />
                  </div>
                  <div className="mt-4">
                    <button className="w-72 py-2 bg-[#87A798] font-Montserrat text-white font-bold rounded-md">
                      Sign Up
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="w-1/2 bg-[#87A798] shadow-lg">
              <div className="flex flex-col items-center justify-center h-full">
                <span className="font-bold text-5xl text-white">
                  <FaShopify />
                </span>
                <h2 className="font-Montserrat font-bold text-2xl text-white">
                  ShoppingMart
                </h2>
              </div>
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
}

export default SignUp
