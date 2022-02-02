import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
  const [enabledState, setEnabledState] = useLocalStorage<boolean>(
    "dark-mode-enabled",
    false
  );
};

export default useDarkMode;
