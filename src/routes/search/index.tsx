import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown } from "components/Common/Icon/Arrow";
import Toggle from "components/Search/Toggle";
import React from "react";

const Search = () => {
  return (
    <div className="">
      {/* Search bar */}
      <section className="flex items-center gap-2 pb-2 shadow-header py-4 px-6">
        <Link to={"/"}>
          <button className="bg-main rounded-full p-2">
            <ArrowDown color={"#FFFFFF"} classNames="rotate-90" />
          </button>
        </Link>
        <div
          className={`rounded-2.5xl w-full border-2 py-2 px-5 relative bg-white border-divider`}
        >
          <input
            className="text-placeholder w-full outline-none font-medium"
            placeholder={"버스번호·정류장 검색"}
          />
        </div>
      </section>

      <section className="py-3 px-6">
        <Toggle />
      </section>
    </div>
  );
};

export default Search;

export const Route = createFileRoute("/search/")({
  component: Search,
});
