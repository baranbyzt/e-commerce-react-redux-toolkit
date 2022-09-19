import style from "../style/HomeCard.module.css";
import img from "../assets/images/basket.png";
import { useDispatch } from "react-redux";
import { productAdd } from "../store/CardSlice";

const HomeCards = ({ data }) => {
  const dispatch = useDispatch();

  let addbtn = () => {
    dispatch(productAdd(data?.id ?? null));
  };

  return (
    <div className={style.wrapper}>
      <img className={style.cardimg} src={data.img} />
      <div className={style.cardvisible}>
        <p>{data.title}</p>
        <div className={style.innersection}>
          <p> amound: {data.amount - data.productReceived} kg</p>
          <p>prize: {data.price}₺</p>
        </div>

        <div onClick={addbtn} className={style.addbtn}>
          <div className={style.inneraddbtn}>
            <img src={img} />
            <b>+</b>
          </div>
          <div className={data.productReceived > 0 ? style.show : style.hidden}>
            <div className={style.count}>
              <b>{data.productReceived}</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCards;
