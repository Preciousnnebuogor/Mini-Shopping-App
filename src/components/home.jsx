import { useEffect, useState } from "react";
import { Shopping } from "./data";

export default function Home() {
  const [textSearch, setTextSearch] = useState("");
  const [search, setSearch] = useState([]);

  function HandleSubmit() {
    if (textSearch === "") {
      setSearch(Shopping);
      return;
    }

    //     const filterAll = Shopping.filter((data)=> data.name.toLowerCase().includes(textSearch.toLowerCase())
    // )
    // setSearch(filterAll);
  }

  useEffect(() => {
    setSearch(Shopping);
  }, []);

  return (
    <div>
      <div>
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

      <div>
        {search.map((value) => {
          return (
            <div>
              <p>{value.catogory}</p>
              <p>{value.name}</p>
              <img src={value.img} />
              <p>{value.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
