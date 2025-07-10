import {toast,Bounce } from 'react-toastify';


export function SuccessToast(title,position="top-right") {
    toast.success(`${title} Added To Cart`, {
position: position,
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});
};

export function ErrorToast(title,position="top-right") {
    toast.success(title, {
position: position,
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
};

