import React, { useState } from "react";
import style from "../style/BasketCard.module.css";
import { useDispatch } from "react-redux";
import { productAdd, productDelete, productReduce } from "../store/CardSlice";
import img_trash from "../assets/images/trash.png";

const BasketCards = ({ data }) => {
  const dispatch = useDispatch();
  const price = data?.price ?? 0;
  const productReceived = data?.productReceived;

  let decrease = () => {
    dispatch(productReduce(data?.id ?? null));
  };
  let increase = () => {
    dispatch(productAdd(data?.id ?? null));
  };
  // silmek
  let handleDeleteItem = () => {
    dispatch(productDelete(data?.id ?? null));
  };

  return (
    <div className={data?.productReceived > 0 ? style.show : style.hidden}>
      <div className={style.wrapper}>
        <img className={style.wrap} src={data.img} />
        <p className={style.title}>{data?.title ?? "product name"}</p>

        <div className={style.tools}>
          <div onClick={handleDeleteItem} className={style.btntrash}>
            <img src={img_trash} />
          </div>

          <div onClick={increase} className={style.btn}>
            +
          </div>

          <div className={style.received}>{data.productReceived} kg</div>
          <div onClick={decrease} className={style.btn}>
            -
          </div>

          <p className={style.money}>{price * productReceived} ₺</p>
        </div>
      </div>
    </div>
  );
};

export default BasketCards;
