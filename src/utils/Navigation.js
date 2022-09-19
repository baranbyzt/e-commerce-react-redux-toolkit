import Header from "../component/Header";
import HomePage from "../pages/HomePage";
import BasketPage from "../pages/BasketPage";
import EmptyPage from "../pages/EmptyPage";
import ProductDetail from "../pages/DetailPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Navigation() {
  return (
    <Router>
      <Header />
      <div className="fixed_problem">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/basket" element={<BasketPage />} />
          <Route path="/detail/:productId" element={<ProductDetail />} />
          <Route path="*" element={<EmptyPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Navigation;
