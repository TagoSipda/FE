import React, { useRef, useState } from "react";
import SearchImg from "images/search.svg";

const Search = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const inputValue = useRef<string>("");

  const history = useRef<string[]>(["수원", "13", "12"]);

  // 최근 검색어 저장 / 불러오기 로직
  // 검색 버튼 클릭 or isClicked === true && Enter 클릭 시 -> 검색 API 호출, 최근 검색어 리스트에 저장

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // inputValue.current = e.currentTarget.value;
  };

  const inputKeydownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // e?.key === 'Enter' && console.log( inputValue.current);
  };

  const clickSearchBtnHandler = () => {
    // console.log(inputValue.current);
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
      <div className="bg-white py-5 px-5 border-dashed border-2 border-disabled rounded-2.5xl shadow-slight-drop-container top-[-13px] absolute w-full top-6">
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
