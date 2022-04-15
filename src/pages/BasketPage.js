

import React,{useState} from 'react'
// style 
import style from '../stylings/BasketPage.module.css'
// component
import BasketCards from '../component/BasketCards';

// store
import { useSelector,useDispatch } from 'react-redux';
import {selectmoney,selectTodos} from '../store/CardSlice';

const BasketPage = () => {

        const todos = useSelector(selectTodos);
        const todosmoney = useSelector(selectmoney);

let kdv = todosmoney.total_spend/18

let cargo= (totalmonney) => {
if(totalmonney > 100)
{
return totalmonney+kdv
}else{
       return totalmonney+kdv+30
}
}

let cargo2 = (totalmonney) => {
        if(totalmonney > 100)
        {
        return 'FREE'
        }else{
               return 30
        }
        }

    return ( 
        <div className={style.wrapper}>
<div className={style.itemssection}>
{todos.map((todo, key) => (
        <BasketCards key={key} data={todo} />
      ))}
</div>
<div className={style.bill}>
<div>
<p>sepet toplam:        {todosmoney.total_spend} ₺</p>
<p>%18-kdv:         {kdv.toFixed(2)} ₺</p>
<p>kargo masrafı: {cargo2(todosmoney.total_spend)} </p>
<p>TOPLAM:            {cargo(todosmoney.total_spend).toFixed(2)} ₺</p>
</div>
</div>
        </div>
     );
}
 
export default BasketPage;

