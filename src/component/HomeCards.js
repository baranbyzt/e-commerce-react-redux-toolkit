import style from "../style/HomeCard.module.css";
import img from "../assets/images/basket.png";
import { useDispatch } from "react-redux";
import { productAdd } from "../store/CardSlice";
import { useNavigate } from "react-router-dom";

const HomeCards = ({ data }) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  let addBtn = () => {
    dispatch(productAdd(data?.id ?? null));
  };
  let goToDetail = () => {
    navigate(`/detail/${data.id}`);
  };

  return (
    <div className={style.wrapper}>
      <div>
        <div
          style={{ position: "absolute" }}
          className={data.productReceived > 0 ? style.show : style.hidden}
        >
          <b className={style.countdata}>{data.productReceived}</b>
        </div>
      </div>
      <img className={style.cardimg} src={data.img} />
      <div className={style.cardvisible}>
        <p>{data.title}</p>
        <div className={style.innersection}>
          <p> amound: {data.amount - data.productReceived} kg</p>
          <p>prize: {data.price}₺</p>
        </div>
      </div>

      <div onClick={goToDetail} className={style.switchpage}>
        Go To Detail
      </div>
    </div>
  );
};

export default HomeCards;
