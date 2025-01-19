import React, { useEffect, useRef, useState } from "react";
import SearchImg from "images/search.svg";
import useLocalStorage from "hooks/useLocalStorage";

const Search = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const inputValue = useRef<string>("");

  const { saveLS, getValueFromLS } = useLocalStorage();

  const history = useRef<string[]>([]);

  const getHistoryValues = async () => {
    const originValue = await getValueFromLS("search history");
    const value: string[] =
      originValue && typeof originValue === "string"
        ? JSON.parse(originValue)
        : [];

    return value;
  };

  useEffect(() => {
    const getValues = async () => {
      const value = await getHistoryValues();
      history.current = value;
    };

    getValues();
  }, []);

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    inputValue.current = e.currentTarget.value;
  };

  const activeSearch = async () => {
    const value = await getHistoryValues();

    const recentHistory = value.length > 0 ? value[value.length - 1] : "";

    if (inputValue.current === recentHistory) return;

    value.push(inputValue.current);
    saveLS("search history", JSON.stringify(value));
  };

  const inputKeydownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    /* 
    229 is here to solve the problem with Korean. 
    As Chrome has the issue when user inputs Korean, they only gets it's keycode as 229 and make it to be composing.
    https://minjung-jeon.github.io/IME-keyCode-229-issue/
    */
    if (e?.key === "Enter" && e?.keyCode !== 229) {
      e.stopPropagation();

      activeSearch();
      console.log("inputKeydownHandler", e?.key);
    }
  };

  const clickSearchBtnHandler = () => {
    console.log("clickSearchBtnHandler");
    activeSearch();
  };

  return (
    <>
      {/* Search bar */}
      <section className="flex relative z-10">
        <div className="bg-main rounded-2.5xl absolute w-2/6 right-0 h-full">
          <button
            className="h-full w-full flex justify-end items-center"
            onClick={clickSearchBtnHandler}
          >
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
          className={`rounded-2.5xl  border-2 py-2 px-5 relative bg-white ${
            isClicked
              ? "w-full border-main animate-expandWidth"
              : "w-5/6 border-divider"
          }`}
        >
          <input
            className="text-placeholder w-full outline-none"
            placeholder={isClicked ? "" : "버스번호·정류장 검색"}
            onChange={inputChangeHandler}
            onKeyDown={inputKeydownHandler}
            onFocusCapture={() => setIsClicked(true)}
            onBlurCapture={() => setIsClicked(false)}
          />
        </div>
      </section>

      {/* Search history */}
      <div
        className={`bg-white ${
          isClicked && history.current.length > 0 ? "py-5 px-5" : "h-0 p-0"
        } border-dashed border-2 border-disabled overflow-hidden transition-all rounded-2.5xl shadow-slight-drop-container absolute w-full top-6`}
      >
        {history.current.map((item, index) => {
          return (
            <div
              key={item}
              className={`text-placeholder font-semibold ${
                history.current.length - 1 > index && "border-b-[1px]"
              } py-1.75`}
            >
              {item}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Search;
