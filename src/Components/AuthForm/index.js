import { useAuth } from '../../contexts/auth';
import { Logo } from '../Logo';
import './index.scss';

function FormLogin({onClick}) {

  const {userValue, setUserValue} = useAuth()

  return(
    <div className="FormLogin">
    <form>
      <div className="input-label">
        <input onChange={(e) => setUserValue({ email: e.target.value, password: userValue.password})} required />
        <label>Email</label>
      </div>
      
      <div className="input-label">
        <input type="password" onChange={(e) => setUserValue({email: userValue.email, password: e.target.value})} required />
        <label>Senha</label>
      </div>
      <button onClick={onClick}>Entrar</button>

    </form>
    </div>
  )
}

export function AuthForm({onClick}) {
  return (
    <div className="AuthForm">
      <Logo isLogin/>
      <FormLogin onClick={onClick}/>
    </div>
  )
}