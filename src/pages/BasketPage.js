import React, { useState } from "react";
import style from "../style/BasketPage.module.css";
import BasketCards from "../component/BasketCards";
import { useSelector } from "react-redux";
import { selectMoney, selectAllProducts } from "../store/CardSlice";

const BasketPage = () => {
  const todos = useSelector(selectAllProducts);
  const todoMoney = useSelector(selectMoney);

  let KDV = todoMoney.totalSpend / 18;
  const nullValue = 110;

  return (
    <div className={style.wrapper}>
      <div className={style.itemssection}>
        {todos.map((todo, key) => (
          <BasketCards key={key} data={todo} />
        ))}
      </div>
      <div className={style.bill}>
        <div>
          <p>basket total: {todoMoney?.totalSpend ?? nullValue} ₺</p>
          <p>%18-KDV: {KDV.toFixed(2)} ₺</p>
          <p>
            shipping cost:{" "}
            {todoMoney?.totalSpend ?? nullValue > 100 ? "FREE" : 30}{" "}
          </p>
          <p>
            TOTAL:{" "}
            {(todoMoney?.totalSpend ?? nullValue > 100
              ? todoMoney?.totalSpend ?? nullValue + KDV
              : todoMoney?.totalSpend ?? nullValue + KDV + 30
            ).toFixed(2)}{" "}
            ₺
          </p>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
