import { LS_NAME } from "utils/types";

const useLocalStorage = () => {
  const saveLS = (key: LS_NAME, value: string) => {
    localStorage.setItem(key, value);
  };

  const getValueFromLS = async (key: LS_NAME) => {
    const originValue = await localStorage.getItem(key);
    const value =
      originValue && typeof originValue === "string"
        ? JSON.parse(originValue)
        : [];

    return value;
  };

  return { saveLS, getValueFromLS };
};

export default useLocalStorage;
