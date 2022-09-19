import style from "../style/MenuCard.module.css";
import img from "../assets/images/basket.png";
import { useNavigate } from "react-router-dom";
import { selectMoneyDirectly, selectCart } from "../store/CardSlice";
import { useSelector } from "react-redux";

const Menu = () => {
  let navigate = useNavigate();
  const todoMoneyDirectly = useSelector(selectMoneyDirectly);
  const todoMoney = useSelector(selectCart);

  let goToHome = () => {
    navigate("./");
  };
  let goToBasket = () => {
    navigate("./basket");
  };

  return (
    <div className={style.wrapper}>
      <div>
        <p onClick={goToHome} className={style.home}>
          Market
        </p>
      </div>

      <div>
        <p className={style.todomoney}>{todoMoneyDirectly} ₺</p>
      </div>

      <div className={style.wrapperinner}>
        <span className={style.addtocartwrapper}>
          <p className={style.addtocart}>{todoMoney.addToCart}</p>
        </span>
        <img onClick={goToBasket} className={style.basketpng} src={img}></img>
      </div>
    </div>
  );
};

export default Menu;
