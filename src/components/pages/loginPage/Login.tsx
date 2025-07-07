import { useState } from 'react';
import { Link } from '@tanstack/react-router';

interface LoginProps{
    titleName: string;
    titleEmail: string;
    titlePassword: string;
    titleLogin: string;
    titleSignUp: string;
    titleDontHaveAccount: string;
}

export default function Login(props: LoginProps) {
     const [showPassword, setShowPassword] = useState(false);
    const passwordVisible = () => {
        setShowPassword(!showPassword);
    }
    
  return (
       <div className="bg-white h-screen flex">
            <div className="bg-zinc-800 p-10 w-full">
                <div className="flex justify-center mb-6">
                    <img src="../public/logo.svg" alt="Logo" className="w-25 h-25" />
                </div>

                <form className="space-y-6">
                    
                    <div>
                        <label className="block text-sm font-medium text-white mb-1">{props.titleEmail}</label>
                        <input
                            type="email"
                            id="email"
                            className='w-full border px-4 text-amber-50 bg-gray-500 rounded-3xl py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500'/>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-white mb-1">{props.titlePassword}</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            className='w-full border px-4 text-amber-50 bg-gray-500  rounded-3xl py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500'/>
                            <button
                            type="button"
                            onClick={passwordVisible}
                            className="absolute right-15 top-74 transform -translate-y-1/2 text-white hover:text-yellow-500"
                            >
                            {showPassword ? "Hide" : "Show"}
                            </button>
                    </div>

                    <Link 
                        type="submit"
                        className="w-full mt-5 bg-orange-400 text-white font-bold py-4 rounded-3xl hover:bg-yellow-600 transition duration-200"
                        to="/">
                        {props.titleLogin}
                    </Link>

                    

                    
                    <div className="mt-2">
                         <p className="text-center text-white">{props.titleDontHaveAccount} 
                            <Link className='text-yellow-500 underline' to="/signUp"> {props.titleSignUp}</Link>
                        </p>
                    </div>
                    
                </form>

            </div>
       </div>
    );
}