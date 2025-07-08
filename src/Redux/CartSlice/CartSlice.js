import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  CartProduct: localStorage.getItem("Cartitem")
    ? JSON.parse(localStorage.getItem("Cartitem"))
    : [],
  TotalItem: 0,
  TotalAmount: 0,
};

export const CartSLice = createSlice({
  name: "counter",
  initialState,
  reducers:{
     AllCartItem: (state,action) => {
       const FindValue = state.CartProduct.findIndex((item)=>{
          return item.id === action.payload.id
       })
       if(FindValue >= 0){
        state.CartProduct[FindValue].CartQuantity += 1;
        localStorage.setItem("Cartitem",JSON.stringify(state.CartProduct));
       }else{
         state.CartProduct.push({ ...action.payload, CartQuantity: 1 });
          localStorage.setItem("Cartitem",JSON.stringify(state.CartProduct));
       }
     },
     RemoveItem: (state,action) => {
         const remove = state.CartProduct.filter(
           (item) => item.id !== action.payload.id
         );
        (state.CartProduct = remove),
          localStorage.setItem("Cartitem", JSON.stringify(state.CartProduct));      
     },
     Increment: (state,action)=> {
       const InDex = state.CartProduct.findIndex(
         (item) => item.id === action.payload.id
       );         
       state.CartProduct[InDex].CartQuantity += 1
       localStorage.setItem("Cartitem",JSON.stringify(state.CartProduct));    
     },
     Decrement: (state,action) => {
        const DecrementInDex = state.CartProduct.findIndex(
         (item) => item.id === action.payload.id
       ); 
       if(state.CartProduct[DecrementInDex].CartQuantity > 1){
         state.CartProduct[DecrementInDex].CartQuantity -= 1;
         localStorage.setItem("Cartitem", JSON.stringify(state.CartProduct)); 
      }    
     },
     GetTotal: (state,action) => {  
     const TotalcartData = state.CartProduct.reduce((previousitem,currentitem) => {
       const{price,CartQuantity} = currentitem;
       const TotalPrice = CartQuantity * price;
        
        previousitem.CartTotalamount += Math.round(TotalPrice)     
        previousitem.CartTotalItem += Math.round(CartQuantity)     
        return previousitem;
      },
    {
      CartTotalItem: 0,
      CartTotalamount: 0,
    })
     state.TotalItem = TotalcartData.CartTotalItem;
     state.TotalAmount = TotalcartData.CartTotalamount;
     }
     
  }
});



export const { AllCartItem,RemoveItem,Increment,Decrement,GetTotal} = CartSLice.actions

export default CartSLice.reducer