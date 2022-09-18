import style from "../style/MenuCard.module.css";
import img from "../assets/images/basket.png";
import { useNavigate } from "react-router-dom";
import { selectMoneyDirectly, selectMoney } from "../store/CardSlice";
import { useSelector } from "react-redux";

const Menu = () => {
  let navigate = useNavigate();
  const todoMoneyDirectly = useSelector(selectMoneyDirectly);
  const todoMoney = useSelector(selectMoney);

  let todoMoneyDirectly_ = todoMoneyDirectly - todoMoney?.totalSpend ?? 0;

  let goHome = () => {
    navigate("./");
  };
  let goBasket = () => {
    navigate("./basket");
  };

  return (
    <div className={style.wrapper}>
      <div>
        <p onClick={goHome} className={style.home}>
          Market
        </p>
      </div>
      <div>
        {/* <p className={style.todomoney}>{todoMoneyDirectly_} $</p> */}
      </div>
      <div className={style.wrapperinner}>
        <img onClick={goBasket} className={style.basketpng} src={img}></img>
      </div>
    </div>
  );
};

export default Menu;
