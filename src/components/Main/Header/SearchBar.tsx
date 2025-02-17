import React from "react";
import SearchImg from "images/search.svg";
import { Link } from "@tanstack/react-router";

const SearchBar = () => {
  return (
    <Link to={"/search"}>
      <section className="flex relative z-10 cursor-pointer">
        <div className="bg-main rounded-2.5xl absolute w-2/6 right-0 h-full">
          <button className="h-full w-full flex justify-end items-center">
            <img
              src={SearchImg}
              alt={"search"}
              width={16}
              height={19}
              className="h-3/5 w-1/2"
            />
          </button>
        </div>

        <div
          className={`rounded-2.5xl  border-2 py-2 px-5 relative bg-white w-5/6 border-divider`}
        >
          <input
            className="text-placeholder w-full outline-none font-medium cursor-pointer"
            placeholder={"버스번호·정류장 검색"}
          />
        </div>
      </section>
    </Link>
  );
};

export default SearchBar;
