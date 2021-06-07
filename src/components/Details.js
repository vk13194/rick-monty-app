import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Details = () => {
  const [allData, setAllData] = useState("");
  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      //console.log('details',data)
      setAllData(data);
    };
    fetchData();
  }, [id]);
  return (
    <div className="p-10">
      <button  className="px-2 py-2 focus:outline-none cursor-pointer"
      onClick={() => history.push("/")}> 
      Back To Home</button>
      <div className=" flex flex-wrap rounded overflow-hidden pt-2  w-full ">
        <img src={allData.image} alt="rick" className="h-80" />
        <div className="px-6 py-3 ">
          <h3 className="text-lg font-bold">{allData.name}</h3>
          <div className="py-2 px-3 flex">
            <span className="px-2 py-2 mr-2 bg-gray-400 rounded-full text-md ">
              {allData.gender}
            </span>
            <span className="px-2 py-2 mr-2 bg-gray-400 rounded-full text-md ">
              {allData.species}
            </span>
            <span className="px-2 py-2 mr-2 bg-gray-400 rounded-full text-md ">
              {allData.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
