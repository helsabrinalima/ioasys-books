import logoHome from '../../assets/images/logo-home.svg';
import logoLogin from '../../assets/images/logo.svg';
import './index.scss';

export function Logo({isLogin}) {
  return(
    <div className="Logo">
      <img src={isLogin ? logoLogin : logoHome} alt="logo" />
      <span style={{color: isLogin ? "#fff" : '#333333'}}>Books</span>
    </div>
  )
}