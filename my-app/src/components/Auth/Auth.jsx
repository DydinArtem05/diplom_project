// components/Auth/Auth.js
import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

const Auth = ({ onLogin, onRegister }) => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth">
      {isLogin ? (
        <LoginForm onLogin={onLogin} />
      ) : (
        <RegistrationForm onRegister={onRegister} />
      )}
      <p>{isLogin ? "Don't have an account?" : "Already have an account?"} <span onClick={handleToggleForm}>{isLogin ? "Register" : "Login"}</span></p>
    </div>
  );
};

export default Auth;
