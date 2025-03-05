import StarIcon from "components/Common/Icon/StarIcon";
import useLocalStorage from "hooks/useLocalStorage";
import React, { useEffect, useState } from "react";
import { tempBookmark } from "utils/temp";
import { LS_NAME } from "utils/types";
import DeleteIcon from "images/trashCan.svg";
import EditIcon from "images/editPencel.svg";
import AddBookmarkIcon from "images/addBookmark.svg";

const BookmarkList = () => {
  const { saveLS, getValueFromLS } = useLocalStorage();
  const [list, setList] = useState<typeof tempBookmark | null>(null);

  useEffect(() => {
    async function getInitialList() {
      const initialList = await getValueFromLS(LS_NAME.BOOKMARK_LIST);
      initialList && setList(initialList as typeof tempBookmark);
    }

    if (!list) {
      getInitialList();
    }
  }, [list, getValueFromLS]);

  return (
    <section className="px-6 py-2.25">
      {list?.map((bookmark) => (
        <article className="border-b-[0.5px] border-b-disabled flex justify-between pt-3 pb-1.75 pl-3.75">
          <div className="flex gap-2.25">
            <StarIcon color={bookmark.color} />
            <span>{bookmark.name}</span>
          </div>

          <div className="flex gap-2.25">
            <button>
              <img src={EditIcon} alt={"edit button"} width={42} height={26} />
            </button>
            <button>
              <img
                src={DeleteIcon}
                alt={"delete button"}
                width={26}
                height={26}
              />
            </button>
          </div>
        </article>
      ))}

      <div className="flex justify-center pt-2.5 pb-10">
        <button className="flex gap-2.25 items-center py-2 px-3.75 border-disabled border border-spacing-2 rounded-2.5xl border-dashed">
          <img
            src={AddBookmarkIcon}
            alt={"add bookmark"}
            width={20}
            height={20}
            className="inline"
          />
          <span className="text-sm-base font-semibold text-desc">
            새 카테고리 추가
          </span>
        </button>
      </div>
    </section>
  );
};

export default BookmarkList;
