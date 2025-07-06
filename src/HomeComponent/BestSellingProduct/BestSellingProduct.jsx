import React from 'react'
import Card from '../../CommonComponent/Card/Card'

const BestSellingProduct = () => {
  return (
    <>
      <div className="bg-TopHColor py-10">
        <div className="container">
            <div className="py-6">
                <h2 className="font-Montserrat text-2xl font-bold">Best Selling Products</h2>
            </div>
            <div>
                <Card />
            </div>
        </div>
      </div>
    </>
  )
}

export default BestSellingProduct
