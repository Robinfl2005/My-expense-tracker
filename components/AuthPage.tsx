// src/components/AuthPage.tsx
import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebaseConfig';


const AuthPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        alert('Logged in successfully!');
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        alert('Account created!');
      }
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleAuth}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br /><br />
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
      <p>
        {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
        <button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Sign Up' : 'Login'}
        </button>
      </p>
    </div>
  );
};

export default AuthPage;
