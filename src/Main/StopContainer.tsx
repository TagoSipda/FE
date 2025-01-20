import React, { useState } from "react";
import BusContainer, { BusContainerProps } from "./BusContainer";
import arrowDown from "images/arrowDown.svg";
import arrowUp from "images/arrowUp.svg";
import RefreshButton from "Common/RefreshButton";

export interface StopItemT {
  name: string;
  no: number;
  direction: string;
  busList?: BusContainerProps[];
  id: number;
  _isExpand?: boolean;
}

const StopContainer = ({
  name,
  no,
  direction,
  id,
  busList,
  _isExpand = false,
}: StopItemT) => {
  const [isExpand, setIsExpand] = useState<boolean>(_isExpand);
  const refresh = () => {
    // stop id를 가지고 해당 정거장 id GET API 호출
    // 성공 시, stopList fetch 부르는 API 캐싱값 바꿔줘야 한다.
  };
  const clickCollapse = () => {
    // 클릭 시, 해당 정거장에 별표 표시된 모든 버스 정보를 불러온다. -> GET API 호출
    setIsExpand((pre) => !pre);
  };

  return (
    <article className="bg-gray shadow-drop-container pt-3.75 rounded-medium">
      <section className="pl-4.25 pr-3.25 py-0 mb-4.5">
        <div className="flex justify-between items-start">
          <div className="text-xl-2xl font-bold">{name}</div>
          <RefreshButton onClick={refresh} color="main" />
        </div>
        <div className="text-xs">
          <span>{no}</span>
          <span>/</span>
          <span>{direction} 방향</span>
        </div>
      </section>

      {busList ? (
        <section className="px-3.25 flex flex-col gap-3.25">
          {busList.map((bus, idx) => (
            <BusContainer {...bus} key={bus.id} isPinned={idx === 0} />
          ))}
        </section>
      ) : (
        <div>버스를 추가해주세요.</div>
      )}

      <div className="text-center">
        <button onClick={clickCollapse}>
          {isExpand ? (
            <img src={arrowUp} alt="arrowUp" />
          ) : (
            <img src={arrowDown} alt="arrowDown" />
          )}
        </button>
      </div>
    </article>
  );
};

export default StopContainer;
