import { createContext, useContext, useState } from 'react';
import { defaults, LoginRequest } from '../services/api';

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userValue, setUserValue] = useState({
    email: '',
    password: '',
  });

  async function LoginAuth() {
    const response = await LoginRequest(userValue.email, userValue.password)

    setUser(response.data);
    defaults.headers.Authorization = `Bearer ${response.headers.authorization}`
  }

  return (
    <AuthContext.Provider value={{ loggedIn: Boolean(user), user, LoginAuth, userValue, setUserValue }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(){
  const context = useContext(AuthContext);
 
  return context;
 }
