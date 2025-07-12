import React from 'react'
import Flex from '../../CommonComponent/Flex'

const AccountDetails = () => {
  return (
    <>
      <div className="bg-TopHColor">
        <div className="container">
          <Flex className={"items-center"}>
              <div className="w-1/3">
             <div>
                <h3 className="font-Montserrat text-xs">Welcome to mahmudul hasan</h3>
             </div>
             <div>
                <h1 className="font-Montserrat font-bold text-lg">Manage My Account</h1>
             </div>
            </div>
            <div className="w-2/3  bg-white">
              <div className="flex items-center gap-x-16">
                 <div>
                <h2>Full Name</h2>
                <p>Mahmudul Hasan</p>
               </div>
                <div>
                <h2>Email</h2>
                <p>mahmudulhasan8627@gmail.com</p>
               </div>
              </div>
            </div>
          </Flex>
        </div>
      </div>
    </>
  )
}

export default AccountDetails
