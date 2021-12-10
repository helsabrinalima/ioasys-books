
import './index.scss';

export function Button({icon, disabled, onClick}) {
  return(
    <button className={`Button ${disabled && 'disabled'}`} onClick={onClick}>
     <img src={icon} alt="icone" />
    </button>
  )
}