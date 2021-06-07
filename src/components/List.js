import React from "react";
import ListItem from "./ListItem";

const List = ({ allData }) => {
  console.log("props", allData);

  return (
    <div className=" flex flex-wrap justify-center">
      {allData.map((item) => (
        <ListItem
          key={item.id}
          name={item.name}
          image={item.image}
          gender={item.gender}
          status={item.status}
          species={item.species}
          id={item.id}
        />
      ))}
    </div>
  );
};

export default List;
