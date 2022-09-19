import { useParams } from "react-router-dom";
import { selectAllProducts } from "../store/CardSlice";
import { useSelector } from "react-redux";
import DetailCart from "../component/DetailCart";

const ProductDetail = () => {
  const { productId } = useParams();
  const todos = useSelector(selectAllProducts);
  let selectedProduct = todos.find((data) => data.id == productId);

  return (
    <>
      <DetailCart data={selectedProduct} />
    </>
  );
};

export default ProductDetail;
