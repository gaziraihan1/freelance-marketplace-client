import React, { useContext, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Auth-context/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import { Eye, EyeOff } from 'lucide-react';

const Signup = () => {
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();

    const {createUser, googleLogin, setUser} = useContext(AuthContext);
    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const {email, password} = Object.fromEntries(formData.entries());

        const capLetter = /[A-Z]/;
        const smLetter= /[a-z]/;

        if(password.length < 6) {
            toast.error('You must have 6 or more character on password')
            return;
        }
        if(!capLetter.test(password)) {
            toast.error('You must have a Captital letter in your password')
            return;
        }
        if(!smLetter.test(password)) {
            toast.error('You must have a Small letter in your password')
            return;
        }
        
        createUser(email, password)
        .then(() => {

        })
        .then(() => {
            toast.success('You have created an account successfully');
            setTimeout(() => {     
                navigate('/auth/login')
            }, 1500);
        })


        // createUser();
    }

    const loginWithGoogle = () => {
        googleLogin()
        .then(result => {
            setUser(result.user);
            toast.success('Successfully Login with Google');
            setTimeout(() => {
                navigate('/')
            }, 1000);
        })
    }


    return (
        <div className='min-h-[80vh] flex items-center justify-center '>
            <div className="card bg-base-100 w-full mx-auto mt-6 max-w-sm shrink-0 shadow-2xl border border-gray-300">
                <h2 className='text-xl md:text-2xl font-medium text-center my-1'>
                    Signup
                </h2>
      <div className="card-body">
        <form onSubmit={handleSignUp} className="fieldset">
            <label className="label">Name</label>
          <input name='name' type="text" className="input" placeholder="Name" />
          <label className="label">Email</label>  
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="label">PhotoURL</label>
          <input name='photoUrl' type="text" className="input" placeholder="Photo" />
          <div className='relative'>

          <label className="label">Password</label>
          <input name='password' type={showPass ? 'text':'password'} className="input" placeholder="Password" />
          <div className="absolute top-7.5 right-6 z-40" onClick={() => setShowPass(!showPass)}>
                {showPass? <EyeOff size={18}/>: <Eye size={18}/>}
              </div>
          </div>
          
          <button type='submit'  className="btn btn-neutral mt-4">Signup</button>
        </form>
        <p className='text-sm md:text-base'>
            You have an account already? <Link className='text-blue-600 hover:text-blue-500' to='/auth/login'>Login</Link>
        </p>
        <h2 className='font-medium text-center'>
            Or
        </h2>
        <button onClick={loginWithGoogle} className='flex items-center py-2 px-3 justify-center border rounded-4xl gap-2 font-medium cursor-pointer'>
            <FcGoogle size={22}/>Signup with Google
        </button>
      </div>
      <ToastContainer />
    </div>
        </div>
       
    );
};

export default Signup;