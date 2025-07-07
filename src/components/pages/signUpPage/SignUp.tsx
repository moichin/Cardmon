import { useState } from 'react';
import { Link } from '@tanstack/react-router';

interface SignUpProps{
    titleFullName: string;
    titleEmail: string;
    titlePassword: string;
    titleConfirmPassword: string;
    titleSignUp: string;
    titleLogin: string;
    titleAlreadyHaveAccount: string;
}

export default function Login(props: SignUpProps) {
     const [showPassword, setShowPassword] = useState(false);
     const [showConfirmPassword, setShowConfirmPassword] = useState(false);


     const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const passwordVisible = () => {
        setShowPassword(!showPassword);
    }

    const ConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (event: React.FormEvent) => {
  event.preventDefault();

  if (password !== confirmPassword) {
    setError('Las contraseñas no coinciden');
  } else {
    setError('');
    // Aquí puedes continuar con el registro
    console.log("Formulario válido. Continuar...");
  }
};

return (
    <div className="bg-white h-screen flex">
            <div className="bg-zinc-800 p-10 w-full">
                <div className="flex justify-center mb-6">
                    <img src="../public/logo.svg" alt="Logo" className="w-25 h-25" />
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-medium text-white mb-1">{props.titleFullName}</label>
                        <input
                            type="text"
                            id="name"
                            className='w-full border px-4 text-amber-50 bg-gray-500 rounded-3xl py-2 focus:outline-none focus:ring-2 focus:ring-orange-400'/>
                    </div>

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
                            className='w-full border px-4 text-amber-50 bg-gray-500  rounded-3xl py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500'
                            onChange={(event) => setPassword(event.target.value)}/>
                            
                            <button
                            type="button"
                            onClick={passwordVisible}
                            className="absolute right-15 top-97 transform -translate-y-1/2 text-white hover:text-yellow-500"
                            >
                            {showPassword ? "Hide" : "Show"}
                            </button>


                            <label className="mt-6 block text-sm font-medium text-white mb-1">{props.titleConfirmPassword}</label>
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            id="password"
                            className='w-full border px-4 text-amber-50 bg-gray-500  rounded-3xl py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500'
                            onChange={(event) => setConfirmPassword(event.target.value)}/>
                            <button
                            type="button"
                            onClick={ConfirmPasswordVisibility}
                            className="absolute right-15 top-119 transform -translate-y-1/2 text-white hover:text-yellow-500"
                            >
                            {showConfirmPassword ? "Hide" : "Show"}
                            </button>
                    </div>

                    <button
                        type="submit"
                        className="w-full mt-5 bg-orange-400 text-white font-bold py-4 rounded-3xl hover:bg-yellow-600 transition duration-200">
                        {props.titleSignUp}
                    </button>

                    
                    <div className="mt-2">
                        <p className="text-center text-white">{props.titleAlreadyHaveAccount} 
                            <Link className='text-yellow-500 underline' to='/'> {props.titleLogin}</Link></p>
                    </div>
                    
                </form>

            </div>
    </div>
    );
}