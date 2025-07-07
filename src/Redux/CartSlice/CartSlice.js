import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  CartProduct: [],
  TotalItem: 0,
  TotalAmount:0,
}

export const CartSLice = createSlice({
  name: "counter",
  initialState,
  reducers:{
     AllCartItem: (state,action) => {
       const FindValue = state.CartProduct.findIndex((item)=>{
          return item.id === action.payload.id
       })
       console.log(FindValue);
       if(FindValue >= 0){
        state.CartProduct[FindValue].CartQuantity += 1;
       }else{
         state.CartProduct.push({ ...action.payload, CartQuantity: 1 });
       }
     }
  }
});



export const { AllCartItem } = CartSLice.actions

export default CartSLice.reducer