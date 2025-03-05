import useLocalStorage from "hooks/useLocalStorage";
import React, { useEffect, useState } from "react";
import { LS_NAME } from "utils/types";

const EmptyView = () => {
  return <div>Empty View</div>;
};

const RecentList = () => {
  const [history, setHistory] = useState<string[]>([
    "asdf",
    "ㄴㅇㄹ",
    "ㅈㄷㄹㄷㅈ",
  ]);
  const { getValueFromLS } = useLocalStorage();

  useEffect(() => {
    const getHistoryValues = async () => {
      const originValue = await getValueFromLS(LS_NAME.RECENT_SEARCH_LIST);
      const value: string[] =
        originValue && typeof originValue === "string"
          ? JSON.parse(originValue)
          : [];

      return value;
    };

    const getValues = async () => {
      const value = await getHistoryValues();
      setHistory(value.reverse());
    };

    getValues();
  }, []);

  return (
    <section>
      {history.map((item, index) => {
        return (
          <div key={`${item}${index}`} className="">
            {item}
          </div>
        );
      })}
    </section>
  );
};

export default RecentList;
