import React from "react";
import Logo from "images/logo.svg";
import Search from "images/search.svg";

const Header = () => {
  return (
    <header className="sticky pb-3 px-6 pt-4 shadow-header">
      <section className="flex justify-between gap-[1.43rem]">
        <img src={Logo} width={104} height={40} alt={"logo"} />
        <div className="flex justify-between border-2 border-main rounded-2.5xl py-2 px-4">
          <input className="w-full"></input>
          <img src={Search} width={24} height={24} alt={"search"} />
        </div>
      </section>
    </header>
  );
};

export default Header;
