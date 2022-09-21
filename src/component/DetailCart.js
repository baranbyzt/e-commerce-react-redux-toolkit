import React from "react";
import style from "../style/DetailCart.module.css";
import { useDispatch } from "react-redux";
import { productAdd, productReduce } from "../store/CardSlice";

const DetailCart = ({ data }) => {
  const dispatch = useDispatch();

  let decrease = () => {
    dispatch(productReduce(data?.id ?? null));
  };
  let increase = () => {
    dispatch(productAdd(data?.id ?? null));
  };

  return (
    <div className={style.wrapper}>
      <div className={style.imgwrapper}>
        <img src={data.img} />
      </div>
      <div className={style.detailwrapper}>
        <h3 className={style.title}>{data.title}</h3>
        <h3 className={style.description}>{data.description}</h3>

        <div className={style.txtgroups}>
          <p>
            amound:{data.amount}/{data.amount - data.productReceived}
          </p>
          <p>price:{data.price} ₺</p>
          <p>category-{data.category}</p>
          <p>{data.seller}-Supply</p>
        </div>

        <div className={style.btngroups}>
          <div className={style.btn} onClick={increase}>
            +
          </div>
          {data.productReceived !== 0 ? (
            <div className={style.btn} onClick={decrease}>
              -
            </div>
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailCart;
