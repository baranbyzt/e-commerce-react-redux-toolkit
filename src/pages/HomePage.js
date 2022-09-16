import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllProducts } from "../store/CardSlice";
import HomeCards from "../component/HomeCards";
import style from "../style/HomePage.module.css";

const HomePage = () => {
  const todos = useSelector(selectAllProducts);

  return (
    <div className={style.wrapper}>
      {todos.map((todo, key) => (
        <HomeCards key={key} data={todo} />
      ))}
    </div>
  );
};

export default HomePage;
