import { createFileRoute } from "@tanstack/react-router";
import BackButton from "components/Common/Icon/BackButton";
import RecentList from "components/Search/RecentList";
import ResultList from "components/Search/ResultList";
import Toggle from "components/Search/Toggle";
import React, { createContext, useContext, useState } from "react";

interface SearchContextT {
  input: string;
  isBus: boolean;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  setIsBus: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
  isSearching: boolean;
}

export const SearchContext = createContext<SearchContextT>({
  input: "",
  isBus: true,
  setInputValue: () => {},
  setIsBus: () => {},
  isSearching: false,
  setIsSearching: () => {},
});

const InputSearch = () => {
  const { setInputValue, input } = useContext(SearchContext);

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  return (
    <div
      className={`rounded-2.5xl w-full border-2 py-2 px-5 relative bg-white border-divider`}
    >
      <input
        className="text-placeholder w-full outline-none font-medium"
        placeholder={"버스번호·정류장 검색"}
        value={input}
        onChange={inputChangeHandler}
      />
    </div>
  );
};

const ListContainer = () => {
  const { isSearching } = useContext(SearchContext);

  return <>{isSearching ? <ResultList /> : <RecentList />}</>;
};

const Search = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [isBus, setIsBus] = useState(true);
  const [isSearching, setIsSearching] = useState(true);

  return (
    <SearchContext.Provider
      value={{
        input: inputValue,
        isBus,
        setInputValue,
        setIsBus,
        isSearching,
        setIsSearching,
      }}
    >
      <div className="">
        {/* Search bar */}
        <section className="flex items-center gap-2 pb-2 shadow-header py-4 px-6">
          <BackButton link="/" />
          <InputSearch />
        </section>

        <section className="py-3 px-6">
          <Toggle />
        </section>

        <ListContainer />
      </div>
    </SearchContext.Provider>
  );
};

export default Search;

export const Route = createFileRoute("/search/")({
  component: Search,
});
