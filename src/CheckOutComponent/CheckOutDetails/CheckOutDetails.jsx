import React from 'react'
import Flex from '../../CommonComponent/Flex'
import BillingForm from '../../CommonComponent/BillingForm/BillingForm'
import OrderHistory from '../OrderHistory/OrderHistory'
const CheckOutDetails = () => {
  return (
    <>
      <div className="bg-TopHColor">
        <div className="container">
          <Flex className={"justify-between py-10"}>
            <div className="w-[700px] bg-white">
              <div className="p-4">
                <h2 className="font-Montserrat text-2xl font-bold">CheckOut</h2>
              </div>
              <div className="p-4">
                <h2  className="font-Montserrat text-2xl font-bold text-gray-400">Billing Details</h2>
              </div>
              <div className="px-5 pb-20">
                <div>
                  <BillingForm
                    className={"font-Montserrat text-md font-bold pb-2"}
                    labelItem={"Full Name*"}
                    InputType={"text"}
                    InputPlaceholder={"Enter your full name"}
                    InputId={"FullName"}
                    InputClass={
                      "w-96 pl-3 focus:border-CommonColor border-[1px] py-1 rounded-md mb-4"
                    }
                  />
                </div>
                <div>
                  <BillingForm
                    className={"font-Montserrat text-md font-bold pb-2"}
                    labelItem={"Email"}
                    InputType={"email"}
                    InputPlaceholder={"Enter your email here"}
                    InputId={"EmailId"}
                    InputClass={
                      "w-96 pl-3 focus:border-CommonColor border-[1px] py-1 rounded-md mb-4"
                    }
                  />
                </div>
                <div>
                  <BillingForm
                    className={"font-Montserrat text-md font-bold pb-2"}
                    labelItem={"Number*"}
                    InputType={"number"}
                    InputPlaceholder={"Enter your number here"}
                    InputId={"Number"}
                    InputClass={
                      "w-96 pl-3 focus:border-CommonColor border-[1px] py-1 rounded-md mb-4"
                    }
                  />
                </div>
                <div>
                  <BillingForm
                    className={"font-Montserrat text-md font-bold pb-2"}
                    labelItem={"Full Name*"}
                    InputType={"text"}
                    InputPlaceholder={"Enter your full name"}
                    InputId={"FullName"}
                    InputClass={
                      "w-96 pl-3 focus:border-CommonColor border-[1px] py-1 rounded-md mb-4"
                    }
                  />
                </div>
                <div>
                  <BillingForm
                    className={"font-Montserrat text-md font-bold pb-2"}
                    labelItem={"Address*"}
                    InputType={"text"}
                    InputPlaceholder={"Enter your Address here"}
                    InputId={"Address"}
                    InputClass={
                      "w-96 pl-3 focus:border-CommonColor border-[1px] py-1 rounded-md mb-4"
                    }
                  />
                </div>
                <div>
                  <BillingForm
                    className={"font-Montserrat text-md font-bold pb-2"}
                    labelItem={"Town/City*"}
                    InputType={"text"}
                    InputPlaceholder={"Enter your city here"}
                    InputId={"FullName"}
                    InputClass={
                      "w-96 pl-3 focus:border-CommonColor border-[1px] py-1 rounded-md mb-4"
                    }
                  />
                </div>
                <div>
                  <BillingForm
                    className={"font-Montserrat text-md font-bold pb-2"}
                    labelItem={"Full Name*"}
                    InputType={"text"}
                    InputPlaceholder={"Enter your full name"}
                    InputId={"FullName"}
                    InputClass={
                      "w-96 pl-3 focus:border-CommonColor border-[1px] py-1 rounded-md mb-4"
                    }
                  />
                </div>
                <div>
                  <BillingForm
                    className={"font-Montserrat text-md font-bold pb-2"}
                    labelItem={"Postal Code*"}
                    InputType={"number"}
                    InputPlaceholder={"Enter your postal code here"}
                    InputId={"PostalCode"}
                    InputClass={
                      "w-96 pl-3 focus:border-CommonColor border-[1px] py-1 rounded-md mb-4"
                    }
                  />
                </div>
              </div>
            </div>
            <div className="w-[500px] h-[500px] bg-white">
                <OrderHistory />
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
}

export default CheckOutDetails
