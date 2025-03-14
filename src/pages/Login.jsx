
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { fetchWithAuth } from '../api/api';
import { encryptData } from '../api/encryption';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const encryptedData = encryptData({ username, password }); // Encrypt data

    try {
      const response = await fetchWithAuth('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: encryptedData }), // Send encrypted data
      });

      if (response.message === 'Login successful') {
        login({ username, role: response.role }); // Update AuthContext with role
        // Redirect based on role
        switch (response.role) {
          case 'admin':
            navigate('/admin');
            break;
          case 'doctor':
            navigate('/doctor');
            break;
          case 'patient':
            navigate('/patient');
            break;
          default:
            navigate('/');
        }
      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
      console.error('Login error:', err);
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-green-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-green-500 mb-6">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-green-700 font-bold mb-2">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border border-green-300 rounded-lg text-green-700 focus:outline-none focus:border-green-500"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-green-700 font-bold mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-green-300 rounded-lg text-green-700 focus:outline-none focus:border-green-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 font-bold rounded-lg hover:bg-green-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;