import { useEffect, useState } from "react";
import { selectAllProducts } from "../store/CardSlice";
import HomeCards from "../component/HomeCard";
import style from "../style/HomePage.module.css";
import search from "../assets/images/search.svg.png";
import { useSelector } from "react-redux";
import AddData from "../component/AddData";

const HomePage = () => {
  const todos = useSelector(selectAllProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const getLinkData = window.localStorage.getItem("link-data");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const searchFilter = todos.filter(
      (data) =>
        data.title.toLowerCase().includes(searchTerm) ||
        data.category.toLowerCase().includes(searchTerm) ||
        data.seller.toLowerCase().includes(searchTerm)
    );
    setSearchResults(searchFilter);
  }, [searchTerm]);

  return (
    <>
      {getLinkData === null ? (
        <AddData />
      ) : (
        <div>
          <div className={style.inputwrapper}>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleChange}
              className={style.input}
            />
            <img src={search} />
          </div>

          <div className={style.wrapper}>
            {searchResults !== null || undefined ? (
              searchResults.map((item) => (
                <HomeCards data={item} key={item.id} />
              ))
            ) : (
              <p>Something went wrong</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
