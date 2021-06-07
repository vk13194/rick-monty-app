import React from "react";
import { Link } from "react-router-dom";
const ListItem = ({ name, image, id, species, gender, status }) => {
  return (
    <div className="p-10">
    <div className="rounded overflow-hidden shadow-lg w-84">
      <Link to={`/details/${id}`}>
        <img src={image} alt="rick"  />
      </Link>
      <div className="px-6 py-3 ">
      <h3 className="text-lg font-bold">{name}</h3>
      </div>
      <div className="py-2 px-3 flex">
      <span className="px-2 py-2 mr-2 bg-gray-400 rounded-full text-md ">{gender}</span>
       <span className="px-2 py-2 mr-2 bg-gray-400 rounded-full text-md ">{species}</span>
       <span className="px-2 py-2 mr-2 bg-gray-400 rounded-full text-md ">{status}</span>
      </div>
      </div>
    </div>
  );
};

export default ListItem;
