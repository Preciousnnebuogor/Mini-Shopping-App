import { useEffect, useState } from "react";
import { Shopping } from "./data";

export default function Home() {
  const [textSearch, setTextSearch] = useState("");
  const [search, setSearch] = useState([]);
  const [limit, setLimit] = useState(4);
  const [toggle, setToggle] = useState(true)

  function HandleSubmit() {
    if (textSearch === "") {
      setSearch(Shopping);
      return;
    }

    const filterAll = Shopping.filter((data) =>
      data.name.toLowerCase().includes(textSearch.toLowerCase())
    );
    setSearch(filterAll);
  }

  useEffect(() => {
    setSearch(Shopping);
  }, []);

  function handleNext() {
    setLimit((prev) => prev + 4);
  }

  function handlePrev() {
    if (limit <= 4) return;
    setLimit((prev) => prev - 4);
  }

  function toggleMode (){
   setToggle((prev)=>!prev)
  }
  return (
    <div className={toggle ? "light-mode" : "dark-mode"}>
      
        <button onClick={toggleMode}>Mode</button>

        <div className="search-container">
          <input
            onChange={(e) => {
              setTextSearch(e.target.value);
              const filterAll = Shopping.filter((data) =>
                data.name.toLowerCase().includes(textSearch.toLowerCase())
              );
              setSearch(filterAll);
            }}
            value={textSearch}
            placeholder="Search..."
          />
          <button onClick={HandleSubmit}>Enter</button>
        </div>

        <div className="section">
          {search.slice(0, limit).map((value) => {
            return (
              <div className="showpart">
                <p>{value.catogory}</p>
                <p>{value.name}</p>
                <img src={value.img} />
                <p>{value.price}</p>
              </div>
            );
          })}
        </div>

        <div className="button">
          <button onClick={handleNext}>Next</button>
          <button onClick={handlePrev}>Previous</button>
        </div>
      </div>
    
  );
}
