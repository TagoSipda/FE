import StarIcon from "Common/Icon/StarIcon";
import { MODAL_CONTENT_DEFAULT_CLASS } from "Common/ModalContainer";
import React from "react";
import { BASIC_CATE_COLOR } from "utils/types";

interface CategoryItem {
  color: string;
  text: string;
  isSelected?: boolean;
}

const tempText = ["알바->집", "", "", "본가", "회사"];

const tempCategoryList: CategoryItem[] = BASIC_CATE_COLOR.map(
  (color, index) => ({
    color,
    text: tempText[Math.floor(Math.random() * 5)],
    isSelected: index === 4,
  })
);

const CategoryList = ({
  headerRef,
}: {
  headerRef?: React.MutableRefObject<HTMLHeadElement | HTMLDivElement | null>;
}) => {
  return (
    <section
      className={`bg-white ${MODAL_CONTENT_DEFAULT_CLASS} flex py-4 px-6 gap-x-1.75 gap-y-2.5 flex-wrap shadow-header`}
      style={{ top: `${headerRef?.current?.clientHeight}px` }}
    >
      {tempCategoryList.map((category) => {
        return (
          <div
            key={category.color}
            className="border-disabled border-[1px] rounded-2.5xl inline-flex px-3.75 py-2.25 "
          >
            <StarIcon color={category.color} />
            {category.text && <span className="pl-2.25">{category.text}</span>}
          </div>
        );
      })}
    </section>
  );
};

export default CategoryList;
