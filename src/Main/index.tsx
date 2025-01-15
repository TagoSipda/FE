import Header from "Main/Header/Header";
import React from "react";
import StopContainer, { StopItemT } from "./StopContainer";

const tempStopItem: StopItemT = {
  name: "박미삼거리",
  no: 12345,
  direction: "상현중학교",
  busList: [
    {
      name: "구로02",
      id: 1,
      list: [
        {
          congestion: 6,
          isAI: true,
          remainMin: "21시간 10분",
          remainStops: 1,
        },
        {
          congestion: 6,
          isAI: false,
          remainMin: "21시간 10분",
          remainStops: 5,
        },
      ],
    },
    {
      name: "구로03",
      id: 2,
      list: [
        {
          congestion: 6,
          isAI: false,
          remainMin: "21시간 10분",
          remainStops: 5,
        },
      ],
    },
  ],
  id: 1,
};

const tempStops: StopItemT[] = Array(4).fill(tempStopItem);
const Main = () => {
  return (
    <>
      <Header />
      <section className="py-8 px-6 overflow-hidden flex flex-col gap-6 h-main-list overflow-y-scroll">
        {tempStops.map((stop) => (
          <StopContainer {...stop} />
        ))}
      </section>
    </>
  );
};

export default Main;
