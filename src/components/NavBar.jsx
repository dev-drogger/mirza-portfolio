import { navLinks } from "../constants";
import { useState } from "react";
import { close, menu } from "../assets/icon";
import { Link } from "react-router-dom";

function NavBar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div
      className={`px-[170px] bg-primary overflow-hidden fixed z-50 inset-x-0 top-0 `}
    >
      <div className="w-full flex py-6 justify-between items-center">
        <Link to="/">
          <h1 className="font-outfit font-semibold text-white text-[18px]">
            Mirza <span className="text-gradient">Wahyu</span>
          </h1>
        </Link>

        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-outfit font-normal cursor-pointer text-[16px] text-white ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              }`}
            >
              <Link to={`${nav.id}`}>{nav.title}</Link>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 absolute bg-black-gradient top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex flex-col justify-end items-center flex-1">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-outfit font-normal cursor-pointer text-[16px] text-white ${
                    index === navLinks.length - 1 ? "mr-0" : "mb-4"
                  }`}
                >
                  <Link to={`${nav.id}`}>{nav.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
