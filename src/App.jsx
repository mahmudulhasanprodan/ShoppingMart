import React from 'react'
import Home from './Pages/Home/Home'
import Shop from './Pages/Shop/Shop';
import Contact from './Pages/Contact/Contact';
import RootLayout from './RootLayout/RootLayout';
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
