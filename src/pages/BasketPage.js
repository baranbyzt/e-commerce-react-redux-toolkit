import React, { useEffect, useState } from "react";
import style from "../style/BasketPage.module.css";
import BasketCards from "../component/BasketCard";
import { useSelector } from "react-redux";
import { selectCart, selectAllProducts } from "../store/CardSlice";

const BasketPage = () => {
  const todos = useSelector(selectAllProducts);
  const todoMoney = useSelector(selectCart);

  let KDV = todoMoney.totalSpend / 18;
  const nullValue = 110;
  let getSpend = todoMoney?.totalSpend ?? nullValue;
  let shippingCost = getSpend >= 100 ? 0 : 30;
  console.log(getSpend);

  return (
    <div className={style.wrapper}>
      <div className={style.itemssection}>
        {todos !== null || undefined ? (
          todos.map((todo, key) => <BasketCards key={key} data={todo} />)
        ) : (
          <p>ups..</p>
        )}
      </div>
      <div className={style.bill}>
        <div>
          <p>basket total: {getSpend} ₺</p>
          <p>%18-KDV: {KDV.toFixed(2)} ₺</p>
          <p>shipping cost: {getSpend >= 100 ? "free" : 30} </p>
          <p>{`total: ${(getSpend + KDV + shippingCost).toFixed(2)} ₺`}</p>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
