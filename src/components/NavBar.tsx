import { Link } from "react-router-dom";

import { DropDown } from "./DropDown";

export const NavBar = () => {
 
  return (
    <nav className="bg-white fixed w-full  border-gray-200 px-2 sm:px-4 py-2.5 rounded dark: bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        
                      <DropDown/>
        <div className="flex">
          <button className="text-white ml-2 bg-emerald-600 p-1.5 rounded">
            <Link to="/search">Search Food</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};
