import React from "react";
import { ArrowDown } from "../Icon/Arrow";
import StarIcon from "Common/Icon/StarIcon";

const CategoryDropdown = ({
  clickCategoryHandler,
}: {
  clickCategoryHandler: () => void;
}) => {
  return (
    <>
      <section className="flex items-center gap-2.25 cursor-pointer">
        <div
          className="w-14 h-8 bg-gray flex items-center justify-between rounded-xl py-1.25 px-1.75"
          onClick={clickCategoryHandler}
        >
          <ArrowDown color={"#111111"} width={15} height={15} />
          <StarIcon />
        </div>
        <span className="text-sm-base font-medium">{"알바->집"}</span>
      </section>
    </>
  );
};

export default CategoryDropdown;
