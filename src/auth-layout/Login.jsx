import { Eye, EyeOff } from 'lucide-react';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../Auth-context/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import { Link, useNavigate } from 'react-router';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
        const [showPass, setShowPass] = useState(false);
        const {googleLogin, setUser} = useContext(AuthContext);
        const navigate = useNavigate();

        const handleSignIn = e => {
            e.preventDefault();
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
                    Login
                </h2>
      <div className="card-body">
        <form onSubmit={handleSignIn} className="fieldset">
          <label className="label">Email</label>  
          <input name='email' type="email" className="input" placeholder="Email" /> 
          <div className='relative'>

          <label className="label">Password</label>
          <input name='password' type={showPass ? 'text':'password'} className="input" placeholder="Password" />
          <div className="absolute top-7.5 right-6 z-40" onClick={() => setShowPass(!showPass)}>
                {showPass? <EyeOff size={18}/>: <Eye size={18}/>}
              </div>
          </div>
          
          <button type='submit'  className="btn btn-neutral mt-4">Login</button>
        </form>
        <p className='text-sm md:text-base'>
            If you don't have an account? <Link className='text-blue-600 hover:text-blue-500' to='/auth/signup'>Signup</Link>
        </p>
        <h2 className='font-medium text-center'>
            Or
        </h2>
        <button onClick={loginWithGoogle} className='flex items-center py-2 px-3 justify-center border rounded-4xl gap-2 font-medium cursor-pointer'>
            <FcGoogle size={22}/>Signin with Google
        </button>
      </div>
      <ToastContainer />
    </div>
        </div>
    );
};

export default Login;