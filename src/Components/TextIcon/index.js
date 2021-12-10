import { Button } from '../Button';
import './index.scss';

export function TextIcon
  ({
    text, 
    icon, 
    twooButton, 
    iconTwo, 
    disabledOne, 
    disabled, 
    disabledTwo, 
    prevClick, 
    nextClick
  }) {
  return(
    <div className="TextIcon">
      <span>{text}</span>
      <Button icon={icon} disabled={disabledOne} onClick={prevClick}/>
      {twooButton && <Button icon={iconTwo} disabled={disabledTwo} onClick={nextClick}/>}
    </div>
  )
}