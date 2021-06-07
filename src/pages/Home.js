import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "../components/List";
import Search from "../components/Search";
const Home = () => {
  const [allData, setAllData] = useState([]);
  const [term, setTerm] = useState("");
  const [page, setPage] = useState(2);
  
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://rickandmortyapi.com/api/character/?page=${page}&name=${term}`
      );
      setAllData(data.results);
    };
    fetchData();
  }, [page, term]);

  return (
    <div className="pb-5">
      <Search searchTerm={(text) => setTerm(text)} />
      <List allData={allData} />
      <div className="flex justify-center m-10">
        <button disabled={page<=1}
          onClick={() => setPage(page - 1)}
          className="px-3 py-3 mx-5 bg-gray-400 border-2 rounded-xl focus:outline-none"
        >
          Prev
        </button>
        <span className="py-3">{page}</span>
        <button 
         onClick={() => setPage(page + 1)}
       className="px-3 py-3 mx-5 bg-gray-400 border-2 rounded-xl focus:outline-none"
        >Next</button>
      </div>
    </div>
  );
};

export default Home;
