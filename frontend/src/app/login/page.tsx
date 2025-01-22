/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState } from 'react';
import { loginApi } from '../../../src/api/loginApi';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useRouter } from 'next/navigation';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  

  const handleLogin = async () => {
    setLoading(true);
    setError(null);
  
    try {
      const response = await loginApi(username, password);
      console.log('Login successful:', response);
  
      // Extract the token from the response
      const token = response.token;
  
      if (!token) {
        throw new Error('No token received from the server.');
      }
  
      // Store the token in localStorage
      localStorage.setItem('authToken', token);
  
      // Redirect to the home page
      router.push('/');
    } catch (err: any) {
      setError(err.message || 'An error occurred during login.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        style={{
          width: '400px',
          height: '460px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          border: '1px solid black',
          borderRadius: '10px',
          gap: '20px',
        }}
      >
        <h1
          style={{
            fontSize: '2.1rem',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          Login
        </h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: '280px',
            height: '30px',
            border: 'none',
            borderBottom: '2px solid #000',
            outline: 'none',
            padding: '5px',
            fontSize: '16px',
          }}
        />
        <div style={{
          position: 'relative'
          }}>
          <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: '280px',
            height: '30px',
            border: 'none',
            borderBottom: '2px solid #000',
            outline: 'none',
            padding: '5px',
            fontSize: '16px',
          }}   
          />  
          <div style={{
              position: 'absolute',
              top: '5px',
              right: '5px', 
              cursor: 'pointer',
            }}
            onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <AiFillEyeInvisible size={20} />
              ) : (
                <AiFillEye size={20} /> 
              )}
            </div>
        </div>
        
        {error && (
          <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>
        )}
        <button
          style={{
            width: '200px',
            padding: '10px',
            border: '1px solid black',
            borderRadius: '10px',
            backgroundColor: 'black',
            color: 'white',
            cursor: 'pointer',
          }}
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </div>
    </div>
  );
};

export default Login;
