

// our img
import img from '../assets/404.png'
// our style
import style from '../stylings/EmptyPage.module.css'

const EmptyPage = () => {
    return ( 
      <div>
          <img className={style.errorimg} src={img}/>
      </div>
     );
}
 
export default EmptyPage;