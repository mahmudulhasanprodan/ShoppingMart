import { createSlice } from '@reduxjs/toolkit'

const ApiStatus = {
  Idle: "IDLE",
  Loading: "LOADING",
  Error: "ERROR"
}

const initialState = {
  CartItem: [],
  Status: ApiStatus.Idle,
}

export const ProductSLice = createSlice({
  name: "counter",
  initialState,
  reducers:{
     ProductData: (state,action) => {   
        state.CartItem = action.payload;       
     }
  }
});



export const { ProductData } = ProductSLice.actions

export default ProductSLice.reducer