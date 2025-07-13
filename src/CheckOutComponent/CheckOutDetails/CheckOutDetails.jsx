import React, { useState } from 'react'
import Flex from '../../CommonComponent/Flex'
import BillingForm from '../../CommonComponent/BillingForm/BillingForm'
import OrderHistory from '../OrderHistory/OrderHistory'
import { CountryName,CityName,DistrictName } from '../../../JsonData/JsonData'


const CheckOutDetails = () => {

const[signUpData,setsignUpData] = useState({
  FullName: "",
  EmailId: "",
  Number: "",
  CountryName: "",
  CityName : "",
  Address: "",
  DistrictName : "",
  PostalCode: "",
});

const[signUpDataError,setsignUpDataError] = useState({
  FullNameError: "",
  EmailIdError: "",
  NumberError: "",
  CountryNameError: "",
  AddressError: "",
  CityNameError : "",
  DistrictNameError : "",
  PostalCodeError: "",
});


// HandleInputChange Function start Here

const HandleInputChange = (e) => {
  setsignUpData({
    ...signUpData,
    [e.target.id]: e.target.value,
  })
};

// Handlesubmit Function Start here
const Handlesubmit = () => {
    const {
      FullName,
      EmailId,
      Number,
      CountryName,
      Address,
      CityName,
      DistrictName,
      PostalCode,
    } = signUpData;

   if(!FullName){
    setsignUpDataError({
      ...signUpDataError,
      FullNameError: "FullName Missing"
    }); 
   }else if(!EmailId){
     setsignUpDataError({
      ...signUpDataError,
      EmailIdError: "Email Missing"
    });
   }else if(!Number){
     setsignUpDataError({
      ...signUpDataError,
      NumberError: "Number Missing"
    });
   }else if(!CountryName){
     setsignUpDataError({
       ...signUpDataError,
       CountryNameError: "Country Missing",
     });
   }else if(!Address){
     setsignUpDataError({
       ...signUpDataError,
       AddressError: "Address Missing",
     });
   }else if(!CityName){
    setsignUpDataError({
       ...signUpDataError,
       CityNameError: "City Missing",
     });
   }else if(!DistrictName){
    setsignUpDataError({
       ...signUpDataError,
       DistrictNameError: "District Missing",
     });
   }else if(!PostalCode){
    setsignUpDataError({
       ...signUpDataError,
       PostalCodeError: "Postal Code Missing",
     });
   }else{
    console.log("Everything is Ok");
    
   }
    
};




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
                <h2 className="font-Montserrat text-2xl font-bold text-gray-400">
                  Billing Details
                </h2>
              </div>
              <div className="px-5 pb-20">
                <div>
                  <BillingForm
                    OnChangeItem={HandleInputChange}
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
                    OnChangeItem={HandleInputChange}
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
                    OnChangeItem={HandleInputChange}
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
                <div className="flex flex-col">
                  <label
                    htmlFor="Country"
                    className="font-Montserrat text-md font-bold"
                  >
                    Country/Region
                  </label>
                  <select
                    name="CountryName"
                    id="CountryName"
                    className="w-96 pl-3 focus:border-CommonColor border-[1px] py-1 mt-2 rounded-md mb-4 cursor-pointer"
                    onChange={HandleInputChange}
                  >
                    <option value="Select Country">Select City</option>
                    {CountryName?.map((item) => (
                      <div key={item.id}>
                        <option value="Bangladesh">{item.CountryName}</option>
                      </div>
                    ))}
                  </select>
                </div>
                <div>
                  <BillingForm
                    OnChangeItem={HandleInputChange}
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
                <div className="flex flex-col">
                  <label
                    htmlFor="Town"
                    className="font-Montserrat text-md font-bold"
                  >
                    Town/City
                  </label>
                  <select
                    name="CityName"
                    id="CityName"
                    className="w-96 pl-3 focus:border-CommonColor border-[1px] py-1 mt-2 rounded-md mb-4 cursor-pointer"
                    onChange={HandleInputChange}
                  >
                    <option value="Select Country">Select Country</option>
                    {CityName?.map((item) => (
                      <div key={item.id}>
                        <option value="Bangladesh">{item.CountryName}</option>
                      </div>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor=""
                    className="font-Montserrat text-md font-bold"
                  >
                    District
                  </label>
                  <select
                    name="DistrictName"
                    id="DistrictName"
                    className="w-96 pl-3 focus:border-CommonColor border-[1px] py-1 mt-2 rounded-md mb-4 cursor-pointer"
                    onChange={HandleInputChange}
                  >
                    <option value="Select Country">Select District</option>
                    {DistrictName?.map((item) => (
                      <div key={item.id}>
                        <option value="Bangladesh">{item.CountryName}</option>
                      </div>
                    ))}
                  </select>
                </div>

                <div>
                  <BillingForm
                    OnChangeItem={HandleInputChange}
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
              <OrderHistory Onsubmit={Handlesubmit}/>
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
}

export default CheckOutDetails
