
// components
import Menu from "./component/Menu";

// pages
import HomePage from "./pages/HomePage";
import BasketPage from "./pages/BasketPage";
import EmptyPage from "./pages/EmptyPage";

// router importing
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

function Navigation() {
  return (
<Router>

  <Menu/>
<div className='fixed_problem'>
  <Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/basket" element={<BasketPage/>}/>
  <Route path="*" element={<EmptyPage/>}/>
  </Routes>
</div>
 

 
</Router>
  );
}

export default Navigation;
