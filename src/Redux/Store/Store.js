import { configureStore } from '@reduxjs/toolkit'
import  ProductSLice  from '../ProductSlice/ProductSlice'


export const Store = configureStore({
  reducer: {
    Product : ProductSLice,
  },
})
