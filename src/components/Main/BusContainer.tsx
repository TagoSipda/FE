import React from "react";
import BustIcon from "images/BusIcon.svg";

export interface ComingBusT {
  congestion?: number;
  isLowFloor?: boolean;
  remainMin?: string;
  remainStops?: number;
  isAI?: boolean;
  no?: number;
}

export interface BusContainerProps {
  name: string;
  id: number;
  isPinned?: boolean;
  list: ComingBusT[];
}

const BusContainer = ({
  name,
  id,
  isPinned = false,
  list,
}: BusContainerProps) => {
  const ComingInfo = (bus: ComingBusT) => {
    if (bus.remainStops) {
      return `${bus.remainStops}번째 전`;
    } else if (bus.remainStops === undefined && bus.isAI) {
      return `AI 예측`;
    }

    return "정보없음";
  };

  const congestion = (cong: ComingBusT["congestion"]) =>
    cong ? (cong > 10 ? "혼잡" : "여유") : "-";

  return (
    <section
      className={`bg-white rounded-medium flex justify-between p-3 ${
        isPinned ? "border-main border-dashed border-[1.5px]" : ""
      }`}
    >
      <div className="flex items-center gap-1.75">
        <div>
          <img className="inline" src={BustIcon} alt="BustIcon" />
        </div>
        <span className="text-lg font-bold">{name}</span>
      </div>

      <div>
        {list.map((bus) => {
          return (
            <div
              key={bus.no}
              className="text-right flex items-center justify-between"
            >
              <div className="font-semibold text-sm mr-2.25">
                {bus.remainMin}
              </div>
              <span className="text-xs text-main">
                {ComingInfo(bus)}({congestion(bus.congestion)})
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BusContainer;
