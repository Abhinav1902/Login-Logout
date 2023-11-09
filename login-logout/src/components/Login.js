import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createRoot } from 'react-dom';
import { login } from '../redux/auth/authActions';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Login = () => {
const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        username,
        password,
      });

      const user = response.data;
      dispatch(login(user));
      navigate('/logout');
    } catch (error) {
      alert('Login failed. Please check your credentials.');
    }
  };
  document.title = 'Login Page';
  const description = 'This is the Login page . You Can login ater clicking on login button';
  const imageURL = 'https://www.freeiconspng.com/thumbs/login-button-png/login-button-png-0.png'; 

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg">
      <h1 className="text-2xl font-semibold mb-4 text-orange-700">Login</h1>
      <div className="mb-4">
      <input
        type="text"    className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400" 
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      </div>
      <div className="mb-4">
      <input 
        type="password"    className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      </div>
      <button  className="w-full px-4 py-2 rounded border border-gray-300  hover:bg-sky-700 focus:outline-none focus:border-blue-400" onClick={handleLogin}>Login</button>
    </div>
    </div>
  );
};

export default Login;
