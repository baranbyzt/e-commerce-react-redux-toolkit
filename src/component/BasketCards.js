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
  let ad = data.price;
  let da = data.product_received;

  let dispatch = useDispatch();
  let decrease = () => {
    dispatch(btnDecreaseItem(data.id));
    dispatch(totalSpendReduce(data.price));
    dispatch(basketDecrease(1));
  };
  let increase = () => {
    dispatch(btnIncreaseItem(data.id));
    dispatch(totalSpend(data.price));
    dispatch(basketInncrease(data.id));
  };

  let trashitem = () => {
    dispatch(btnDeleteItem(data.id));
  };

  return (
    <div className={data.product_received > 0 ? style.show : style.hidden}>
      <div className={style.wrapper}>
        <img className={style.wrapimg} src={data.img} />
        <p className={style.name}>{data.title}</p>
        <div className={style.tools}>
          <div onClick={trashitem} className={style.btntrash}>
            <img src={img_trash} />
          </div>

          <div onClick={increase} className={style.btn}>
            +
          </div>
          <div className={style.received}>{data.product_received} kg</div>
          <div onClick={decrease} className={style.btn}>
            -
          </div>
          <p className={style.money}>{ad * da} ₺</p>
        </div>
      </div>
    </div>
  );
};

export default BasketCards;
