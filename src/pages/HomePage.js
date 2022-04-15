





import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {addTodo,selectTodos} from '../store/CardSlice';

// our components
import HomeCards from '../component/HomeCards';
// style
import style from '../stylings/HomePage.module.css'

const HomePage = () => {
    const todos = useSelector(selectTodos);
    const dispatch = useDispatch();

    return ( 
        <div className={style.wrapper}>

           {todos.map((todo, key) => (
        <HomeCards key={key} data={todo} />
      ))}



        </div>
     );
}
 
export default HomePage;
