import React, { useRef, useState } from "react";
import Search from "./Search";
import Setting from "images/settingLogo.svg";
import CategoryDropdown from "Common/CategoryDropdown";
import ModalContainer from "Common/ModalContainer";

const Header = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState<boolean>(false);
  const headerRef = useRef<HTMLHeadElement | null>(null);

  const clickCategoryHandler = () => {
    setIsCategoryOpen((prev) => !prev);
  };

  const closeCategoryList = () => {
    setIsCategoryOpen(false);
  };

  console.log(isCategoryOpen);

  return (
    <>
      <header
        className="bg-white sticky px-6 py-4 shadow-header h-25 z-50"
        ref={headerRef}
      >
        <div className=" relative">
          <Search />
        </div>

        <div className="flex justify-between items-center pt-4">
          <CategoryDropdown clickCategoryHandler={clickCategoryHandler} />
          <button>
            <img src={Setting} alt={"setting"} />
          </button>
        </div>
      </header>

      {isCategoryOpen && (
        <ModalContainer classNames=" " onClose={closeCategoryList}>
          <section
            className={` h-40 bg-white`}
            style={{ top: `${headerRef.current?.clientHeight}px` }}
          ></section>
        </ModalContainer>
      )}
    </>
  );
};

export default Header;
