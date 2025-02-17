import React, { useState } from "react";

const ToggleText = ({
  text,
  textColor,
}: {
  text: string;
  textColor: string;
}) => (
  <div className={`${textColor} transition-all duration-300 w-1/2 text-center`}>
    {text}
  </div>
);

const Toggle = () => {
  const [isBus, setIsBus] = useState(true);

  return (
    <div
      className="relative h-10 flex bg-gray-300 rounded-full cursor-pointer"
      onClick={() => setIsBus(!isBus)}
    >
      {/* 이동하는 강조 표시 (배경) */}
      <div
        className={`absolute z-10 shadow-drop-container w-[55%] h-10 bg-main rounded-full transition-transform duration-300 ${
          isBus ? "translate-x-0" : "translate-x-[82%]"
        }`}
      />

      {/* 텍스트 */}
      <div className="relative border-dashed border-main border-opacity-50 border-2 rounded-full z-10 flex w-full justify-between items-center font-semibold text-gray-700 text-cente">
        <ToggleText
          text={"버스"}
          textColor={isBus ? "text-white" : "text-main"}
        />
        <ToggleText
          text={"정류장"}
          textColor={isBus ? "text-main" : "text-white"}
        />
      </div>
    </div>
  );
};

export default Toggle;
