import React from 'react'
import {googlelogo} from '../assets'
import{
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut,
} from 'firebase/auth';
import {ToastContainer ,toast} from "react-toastify";
// import {navigate} from "react-router-dom";
import {useNavigate} from "react-router-dom";


const Login = () => {
    const auth = getAuth();
    const navigate = useNavigate()
    const provider = new GoogleAuthProvider();
    const handleGoogle = (e) =>{
        e.preventDefault();
        signInWithPopup(auth,provider).then((result)=>{
            const user = result.user;
            console.log(user);
            setTimeout(() => {
                navigate("/");
            },1000);
        }).catch((error)=>{
            console.log(error);
        })

        };

    // };
    
        const handleSignOut = ()=>{
            signOut(auth).then(() => {
                toast.success("Log out Success");
                // dispatch(removeUser());
            })
            .catch((error) =>{
                console.log(error)
            })
        }


  return (
    <div className='w-full flex flex-col items-center justify-center gap-10 py-20'>
      <div className='w-full flex items-center justify-center gap-10'>
       <div onClick={handleGoogle}  className='text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300'>

       <img  className='w-8' src={googlelogo}/>
        <span className="text-sm text-gray-900">Sign in with Google</span>
        </div>
       <button onClick={handleSignOut} className='bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300'>Sign Out</button>
       
      </div>
      <ToastContainer
position="top-left"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    </div>
  );
  };

export default Login
