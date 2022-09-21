import style from "../style/HomeCard.module.css";
import { useNavigate } from "react-router-dom";

const HomeCards = ({ data }) => {
  let navigate = useNavigate();

  let goToDetail = () => {
    navigate(`/detail/${data.id}`);
  };

  return (
    <div className={style.wrapper}>
      <div>
        <div className={data.productReceived > 0 ? style.show : style.hidden}>
          <b className={style.countdata}>{data.productReceived}</b>
        </div>
      </div>
      <img className={style.cardimg} src={data.img} />
      <div className={style.cardvisible}>
        <div className={style.titlestyle}>
          <p>{data.title}</p>
          <p>{data.seller}</p>
        </div>
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
