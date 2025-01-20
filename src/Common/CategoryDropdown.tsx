import React from "react";
import { ArrowDown } from "./Arrow";

const StarIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.7585 2.24581C11.002 0.849433 8.99806 0.849431 8.24154 2.24581L6.73132 5.03334C6.44328 5.565 5.93016 5.93781 5.3355 6.04746L2.21772 6.62237C0.655909 6.91036 0.0366497 8.81624 1.13091 9.96724L3.31532 12.2649C3.73195 12.7032 3.92795 13.3064 3.84848 13.9058L3.4318 17.0487C3.22307 18.623 4.8443 19.8009 6.27712 19.1159L9.13737 17.7484C9.68291 17.4876 10.3172 17.4876 10.8627 17.7484L13.723 19.1159C15.1558 19.8009 16.777 18.623 16.5683 17.0487L16.1516 13.9058C16.0721 13.3064 16.2681 12.7032 16.6848 12.2649L18.8692 9.96724C19.9634 8.81624 19.3442 6.91036 17.7824 6.62237L14.6646 6.04746C14.0699 5.93781 13.5568 5.56501 13.2688 5.03334L11.7585 2.24581Z"
        fill="#A771F8"
      />
    </svg>
  );
};

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
