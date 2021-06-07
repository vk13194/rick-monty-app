import React from "react";
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="flex bg-black w-full h-16 justify-center
     items-center sticky top-0 z-10">
      <h2 className="text-xl  text-white cursor-pointer">
      <Link to="/">Rick and Monty</Link>
        
        </h2>
      
    </div>
  );
};

export default Navbar;
