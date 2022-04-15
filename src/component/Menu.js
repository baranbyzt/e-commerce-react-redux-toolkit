

// our style
import style from '../stylings/MenuCard.module.css'
// our img
import img from '../assets/basket.png'
// router dom
import { useNavigate} from "react-router-dom";
// our basket count
import {selectmoney} from '../store/CardSlice'
import { useSelector } from 'react-redux';

const Menu = () => {
  let navigate = useNavigate();
  const todosmoney = useSelector(selectmoney);

  let gohome = () => {
navigate('./')
  }
  let gobasket = () => {
navigate('./basket')
  }

    return ( 
   <div className={style.wrapper}>
       
       <div>
       <p onClick={gohome} className={style.home}>Market</p>
       </div>
       <div className={style.wrapperinner}>
      
         <img onClick={gobasket} className={style.basketpng} src={img} ></img>
       </div>
   </div>
     );
}

export default Menu;

/*
  <p className={style.basketcounter}>
        {todosmoney.total_basket}
        </p>
        
*/