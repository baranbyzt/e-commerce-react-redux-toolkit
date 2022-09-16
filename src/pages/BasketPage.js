import React, { useState } from "react";
import style from "../style/BasketPage.module.css";
import BasketCards from "../component/BasketCards";
import { useSelector } from "react-redux";
import { selectMoney, selectAllProducts } from "../store/CardSlice";

const BasketPage = () => {
  const todos = useSelector(selectAllProducts);
  const todoMoney = useSelector(selectMoney);

  let KDV = todoMoney.total_spend / 18;

  return (
    <div className={style.wrapper}>
      <div className={style.itemssection}>
        {todos.map((todo, key) => (
          <BasketCards key={key} data={todo} />
        ))}
      </div>
      <div className={style.bill}>
        <div>
          <p>sepet toplam: {todoMoney.total_spend} ₺</p>
          <p>%18-KDV: {KDV.toFixed(2)} ₺</p>
          <p>kargo masrafı: {todoMoney.total_spend > 100 ? "FREE" : 30} </p>
          <p>
            TOPLAM:{" "}
            {(todoMoney.total_spend > 100
              ? todoMoney.total_spend + KDV
              : todoMoney.total_spend + KDV + 30
            ).toFixed(2)}{" "}
            ₺
          </p>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
