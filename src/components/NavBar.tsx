import { Link } from "react-router-dom";
import { useState } from "react";
import french from "../assets/french-fries.png";
import hamburger from "../assets/hamburger.png";
import hotdog from "../assets/hot-dog.png";
import meal from "../assets/meal.png";
import toamto from "../assets/tomato.png";
import noodles from "../assets/noodles.png";

export const NavBar = () => {
  const [open, setOpen] = useState(false);

  const openDropDown = () => {
    setOpen(!open);
  };

  const navs = [
    { nameLink: "All", path: "category/todos", img: meal },
    { nameLink: "Side", path: "category/Side", img: french },
    { nameLink: "Vegetarian", path: "category/Vegetarian", img: toamto },
    { nameLink: "Beef", path: "category/Beef", img: hamburger },
    { nameLink: "Pasta", path: "category/Pasta", img: noodles },
    { nameLink: "Pork", path: "category/Pork", img: hotdog },
  ];
  return (
    <nav className="bg-white fixed w-full  border-gray-200 px-2 sm:px-4 py-2.5 rounded dark: bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div
        
          className={
            open
              ? "inline-flex border-solid border-2 border-amber-400 bg-white border rounded-md"
              : "inline-flex bg-white border rounded-md"
          }
        >
          <button
            onClick={openDropDown }
            
            className="w-40 px-4 py-2 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-l-md"
          >
            Category
          </button>

          <div className="relative">
            <button
              type="button"
              onClick={openDropDown}
              onBlur={openDropDown}

              className="inline-flex items-center justify-center h-full px-2 text-gray-600 border-l border-gray-100 hover:text-gray-700 rounded-r-md hover:bg-gray-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {open ? (
              <div className="fixed rounded-md left-6 z-10 w-48 mt-2 origin-top-right bg-white  border-gray-100  shadow-lg">
                <div >
                  <ul>
                    {navs.map((e) => (
                      <Link 
                        to={e.path}
                        className=" flex  justify-between h-10 hover:bg-amber-200 items-center"
                        
                        >
                        <li
                          key={e.nameLink}
                          className="block p-2 text-xs font-semibold dark:hover:bg-gray-600 dark:hover:text-white "
                          onClick={openDropDown}
                        >
                          {e.nameLink}
                        </li>
                        <img
                          className="w-3.5 h-3.5 mr-3 "
                          src={e.img}
                          alt=""
                        />
                      </Link>
                    ))}
                  </ul>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <div className="flex">
          <button className="text-white ml-2 bg-emerald-600 p-1.5 rounded">
            <Link to="/search">Search Food</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};
