import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllProducts } from "../store/CardSlice";
import HomeCards from "../component/HomeCards";
import style from "../style/HomePage.module.css";

const HomePage = () => {
  const todos = useSelector(selectAllProducts);

  return (
    <div className={style.wrapper}>
      {todos !== null || undefined ? (
        todos.map((todo, key) => <HomeCards key={key} data={todo} />)
      ) : (
        <p>ups..</p>
      )}
    </div>
  );
};

export default HomePage;
