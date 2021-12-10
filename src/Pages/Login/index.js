import React from 'react';
import { useHistory } from 'react-router';
import { AuthForm } from '../../Components/AuthForm';
import { useAuth } from '../../contexts/auth';
import './index.scss';

export function Login() {
  const {LoginAuth} = useAuth()
  const history = useHistory();

  const handleLogin = async (event) => {
    event.preventDefault()
    await LoginAuth()
    history.push('/home')
  } 

  return (
    <div className="Login">
      <AuthForm onClick={handleLogin}/>
    </div>
  )
}