import React from "react";
import Search from "./Search";
import Setting from "images/settingLogo.svg";

const Header = () => {
  return (
    <header className="sticky px-6 py-4 shadow-header h-25">
      <div className=" relative">
        <Search />
      </div>

      <div>
        {/* 카테고리 드롭다운 */}
        <button>
          <img src={Setting} alt={"setting"} />
        </button>
      </div>
    </header>
  );
};

export default Header;
