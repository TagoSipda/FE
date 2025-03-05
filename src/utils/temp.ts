import { BASIC_CATE_COLOR } from "./types";

const tempText = ["알바->집", "", "", "본가", "회사", "수원 가는 길", "왕십리", "학교"];
export const tempBookmark = BASIC_CATE_COLOR.map((color, index) => ({
  color,
  name: tempText[index],
}));
