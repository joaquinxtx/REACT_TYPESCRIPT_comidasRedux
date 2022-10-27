import { Link } from "react-router-dom";
import { useState } from "react";

export const NavBar = () => {
  const [open, setOpen] = useState(false);

  const openDropDown = () => {
    setOpen(!open);
  };

  const navs = [
    { nameLink: "All 🍟", path: "category/todos" },
    { nameLink: "Side 🥟", path: "category/Side" },
    { nameLink: "Vegetarian🥗", path: "category/Vegetarian" },
    { nameLink: "Beef🍖", path: "category/Beef" },
    { nameLink: "Pasta🍝", path: "category/Pasta" },
    { nameLink: "Pork🥩", path: "category/Pork" },
  ];
  return (
    <nav className="bg-white  border-gray-200 px-2 sm:px-4 py-2.5 rounded dark: bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="inline-flex bg-white border rounded-md">
          <button
            onClick={openDropDown}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-l-md"
          >
            Category
          </button>

          <div className="relative">
            <button
              type="button"
              onClick={openDropDown}
              className="inline-flex items-center justify-center h-full px-2 text-gray-600 border-l border-gray-100 hover:text-gray-700 rounded-r-md hover:bg-gray-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
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
              <div className="absolute z-10 w-56 mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg">
                <div className="p-2">
                  <ul>
                    {navs.map((e) => (
                      <li key={e.nameLink}>
                        <Link
                          to={e.path}
                          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          {e.nameLink}
                        </Link>
                      </li>
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
