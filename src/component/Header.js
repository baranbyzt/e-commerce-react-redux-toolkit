import style from "../style/MenuCard.module.css";
import img from "../assets/images/basket.png";
import { useNavigate } from "react-router-dom";
import { selectMoney } from "../store/CardSlice";
import { useSelector } from "react-redux";

const Menu = () => {
  let navigate = useNavigate();
  const todosmoney = useSelector(selectMoney);

  let gohome = () => {
    navigate("./");
  };
  let gobasket = () => {
    navigate("./basket");
  };

  return (
    <div className={style.wrapper}>
      <div>
        <p onClick={gohome} className={style.home}>
          Market
        </p>
      </div>
      <div className={style.wrapperinner}>
        <img onClick={gobasket} className={style.basketpng} src={img}></img>
      </div>
    </div>
  );
};

export default Menu;
