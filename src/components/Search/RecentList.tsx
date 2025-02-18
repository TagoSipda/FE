import useLocalStorage from "hooks/useLocalStorage";
import React, { useEffect, useState } from "react";

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
      const originValue = await getValueFromLS("search history");
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
