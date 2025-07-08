import { configureStore } from '@reduxjs/toolkit'
import  ProductSLice  from '../ProductSlice/ProductSlice'
import  CartSLice  from '../CartSlice/CartSlice'
import { GetTotal } from '../CartSlice/CartSlice'


export const Store = configureStore({
  reducer: {
    Product : ProductSLice,
    Cart : CartSLice,
  },
})


Store.dispatch(GetTotal())