export const LS_KEYS = "search history";

const useLocalStorage = () => {
  const saveLS = (key: typeof LS_KEYS, value: string) => {
    localStorage.setItem(key, value);
  };

  const getValueFromLS = async (key: typeof LS_KEYS) => {
    return await localStorage.getItem(key);
  };

  return { saveLS, getValueFromLS };
};

export default useLocalStorage;
