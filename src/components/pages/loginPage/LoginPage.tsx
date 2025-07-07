import { useState } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';

interface LoginProps {
  titleName: string;
  titleEmail: string;
  titlePassword: string;
  titleLogin: string;
  titleSignUp: string;
  titleDontHaveAccount: string;
}

export default function Login(props: LoginProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const passwordVisible = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!email || !password) {
      setError('⚠️ Por favor, complete todos los campos.');
      return;
    }

    try {
      const response = await fetch('https://cardmond.test/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log('Respuesta del login:', data);

      if (!response.ok) {
    setError(data.message || '⚠️ Error al iniciar sesión');
    } else if (data.access_token) {
    // ✅ Guardar el token correcto
    localStorage.setItem('token', data.access_token);
    localStorage.setItem('token_type', data.token_type || 'Bearer');
    setError('');

    // Redirigir
    navigate({ to: '/home' });
    } else {
    setError('⚠️ No se recibió un token válido del servidor.');
    console.error('Token ausente en la respuesta:', data);
    }
    } catch (err) {
      console.error('Error en login:', err);
      setError('⚠️ No se pudo conectar con el servidor.');
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
            <label className="block text-sm font-medium text-white mb-1">{props.titleEmail}</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border px-4 text-amber-50 bg-gray-500 rounded-3xl py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1">{props.titlePassword}</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border px-4 text-amber-50 bg-gray-500 rounded-3xl py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button
              type="button"
              onClick={passwordVisible}
              className="absolute right-15 top-74 transform -translate-y-1/2 text-white hover:text-yellow-500"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button
            type="submit"
            className={`w-full mt-5 text-white font-bold py-4 rounded-3xl transition duration-200 ${
              email && password ? 'bg-orange-400 hover:bg-yellow-600' : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            {props.titleLogin}
          </button>

          <div className="mt-2">
            <p className="text-center text-white">
              {props.titleDontHaveAccount}
              <Link className="text-yellow-500 underline" to="/signUp">
                {' '}
                {props.titleSignUp}
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
