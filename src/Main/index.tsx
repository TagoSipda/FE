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
          no: 123,
        },
        {
          congestion: 6,
          isAI: false,
          remainMin: "21시간 10분",
          remainStops: 5,
          no: 234,
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
          no: 345,
        },
      ],
    },
    {
      name: "구로03",
      id: 3,
      list: [
        {
          congestion: 6,
          isAI: false,
          remainMin: "21시간 10분",
          remainStops: 5,
          no: 345,
        },
      ],
    },
    {
      name: "구로03",
      id: 3,
      list: [
        {
          congestion: 6,
          isAI: false,
          remainMin: "21시간 10분",
          remainStops: 5,
          no: 345,
        },
      ],
    },
  ],
  id: 1,
};

const tempStops: StopItemT[] = Array(4)
  .fill(tempStopItem)
  .map((stop, index) => ({ ...stop, id: index }));

const MainContent = () => {
  // Local Storage에서 정보 가져옴
  return (
    <section className="py-8 px-6 overflow-hidden flex flex-col gap-6 h-main-list overflow-y-scroll">
      {tempStops.map((stop) => (
        <StopContainer {...stop} key={stop.id} />
      ))}
    </section>
  );
};

const Main = () => {
  return (
    <>
      <Header />
      <MainContent />
    </>
  );
};

export default Main;
