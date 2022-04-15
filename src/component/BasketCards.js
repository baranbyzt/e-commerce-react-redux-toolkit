
import React,{useState} from 'react'

// style
import style from '../stylings/BasketCard.module.css'
import { useDispatch,useSelector } from 'react-redux';
import {btndecreaseitem,btnincreaseitem,totalspendreduce,btndeleteitem
,totalspend,superbasket_increase,superbasket_decrease} from '../store/CardSlice'

// trash img
import img_trash from '../assets/trash.png'

const BasketCards = ({data}) => {
let ad = data.price
let da = data.product_received

  let dispatch = useDispatch()

  let decrease = () => {
   dispatch(btndecreaseitem(data.id));
   dispatch(totalspendreduce(data.price))
   dispatch(superbasket_decrease(1))
  }
  let increase = () => {
    dispatch(btnincreaseitem(data.id));
    dispatch(totalspend(data.price))
    dispatch(superbasket_increase(data.id))
  }

  let trashitem = () => {
    dispatch(btndeleteitem(data.id));
 
  }




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
<div className={style.received}>
  {data.product_received} kg
</div>
<div onClick={decrease} className={style.btn}>
-
</div>
<p className={style.money}>{ad*da} ₺</p>
       </div>

        </div>
       </div>
     );
}
 
export default BasketCards;
