import React from 'react'
import Home from './Pages/Home/Home'
import Shop from './Pages/Shop/Shop';
import Contact from './Pages/Contact/Contact';
import RootLayout from './RootLayout/RootLayout';
import Cart from './Pages/Cart/Cart';
import ProductDetails from './ProductDetailComponent/ProductDetails/ProductDetails';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
   createRoutesFromElements(
   <Route path="/" element={<RootLayout />}>
     <Route index element={<Home />}></Route>
    <Route path="/shop" element={<Shop />}></Route>
    <Route path="/contact" element={<Contact />}></Route>
    <Route path="/cart" element={<Cart />}></Route>
    <Route path="/productdetails/:ProductId" element={<ProductDetails />}></Route>
   </Route>
   )
)

const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App
