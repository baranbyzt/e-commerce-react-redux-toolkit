import img from "../assets/images/404.png";
import style from "../style/EmptyPage.module.css";

const EmptyPage = () => {
  return (
    <div>
      <img className={style.errorimg} src={img} />
    </div>
  );
};

export default EmptyPage;
