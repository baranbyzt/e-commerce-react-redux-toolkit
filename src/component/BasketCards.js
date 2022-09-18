import React, { useState } from "react";
import style from "../style/BasketCard.module.css";
import { useDispatch } from "react-redux";
import {
  btnDecreaseItem,
  btnIncreaseItem,
  totalSpendReduce,
  btnDeleteItem,
  totalSpend,
  basketInncrease,
  basketDecrease,
} from "../store/CardSlice";
import img_trash from "../assets/images/trash.png";

const BasketCards = ({ data }) => {
  const price = data?.price ?? 0;
  const productReceived = data?.productReceived;
  const dispatch = useDispatch();

  let decrease = () => {
    dispatch(btnDecreaseItem(data?.id ?? 1));
    dispatch(totalSpendReduce(data?.price ?? 1));
    dispatch(basketDecrease(1));
  };
  let increase = () => {
    dispatch(btnIncreaseItem(data?.id ?? 1));
    dispatch(totalSpend(data?.price ?? 1));
    dispatch(basketInncrease(data?.id ?? 1));
  };

  let handleDeleteItem = () => {
    dispatch(btnDeleteItem(data?.id ?? 1));
    decrease();
  };

  return (
    <div className={data?.productReceived > 0 ? style.show : style.hidden}>
      <div className={style.wrapper}>
        <img className={style.wrap} src={data.img} />
        <p className={style.name}>{data?.title ?? "product name"}</p>
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
