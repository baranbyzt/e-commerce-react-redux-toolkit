


// style
import style from '../stylings/HomeCard.module.css'
// img
import img from '../assets/basket.png'
// we use it to add stickers to the global store
import { useDispatch } from 'react-redux';
import {toadd,totalspend,superbasket_increase} from '../store/CardSlice'

const HomeCards = ({data}) => { 
 
    const dispatch = useDispatch();

   
let addbtn = () => {
    dispatch(toadd(data.id))
    dispatch(totalspend(data.price))
    dispatch(superbasket_increase(data.id))
}



    return ( 
        <div className={style.wrapper}>
        
<img className={style.cardimg} src={data.img}/>
<div className={style.cardvisible}>
<p>{data.title} {data.id}</p>
<div className={style.innersection}>
<p> aded: {data.amount}</p>
<p>fiyat: {data.price}₺</p>
</div>

<div onClick={addbtn} className={style.addbtn}>
<div className={style.inneraddbtn}>
add
<img src={img} />
<b>+</b>
</div>

<div className={data.product_received > 0 ? style.show : style.hidden}>
<div className={style.count}>
<b >{data.product_received}</b>
</div>
</div>

</div>
</div>
        </div>
     );
}
 
export default HomeCards;


/*
className={data.product_received > 0 ? style.show : style.hidden}
*/