import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { login, fetchWithToken } from '../utils/apiService';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate(); // Initialize navigate for navigation

  const handleLogin = async (): Promise<void> => {
    try {
      const token = await login(username, password);

      // Use the obtained token to fetch user details from the check-status endpoint
      const userDetails = await fetchWithToken('/api/auth/check-status', {
        method: 'GET',
      });

      console.log('Token JWT:', token);
      console.log('User Details:', userDetails);

      // Navigate to the ViewComponent with user details as props
      navigate('/view', { state: { userDetails } });
    } catch (error) {
      console.error('Error de autenticación:', error.message);
    }
  };

  return (
    <div>
      <input type="text" placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Iniciar sesión</button>
    </div>
  );
};

export default Login;
