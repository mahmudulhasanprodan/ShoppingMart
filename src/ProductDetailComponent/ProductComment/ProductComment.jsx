import React, { useEffect, useState } from 'react'
import image from "../../assets/HomeComponentpic/Rocket.png"
import { collection, getDocs } from "firebase/firestore"; 
import { db } from '../../../Firebase/FirebaseSDK';



const ProductComment = ({realtime}) => {

  const[ProductComment,setProductComment] = useState([])

useEffect(() => {
  const AllCommpent = [];
getDocs(collection(db, "Comment")).then((querySnapshot) => {
  querySnapshot.forEach((item) => {
    AllCommpent.push({
      UnicId: item.id,
      UnicName: item.data(),
    });
  });
  setProductComment(AllCommpent); 

});
},[realtime])


  return (
    <>
      <div>
        {ProductComment?.map((item) => (
          <div className="flex gap-x-3 pb-4 border-b-[1px] pt-2" key={item.UnicId}>
            <div className="w-10 h-10 bg-gray-500 rounded-full"> 
              
            </div>
            <div className="w-2/3">
              <h2 className="font-Montserrat text-base font-semibold">
                {item.UnicName.Name}
              </h2>
              <p className="font-Montserrat text-sm font-normal text-justify">
                {item.UnicName.InputMessege}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductComment
