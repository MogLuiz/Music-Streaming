// Custom Hooks
import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
  const [enabledState, setEnabledState] = useLocalStorage<boolean>(
    "dark-mode-enabled",
    false
  );

  const preferDarkMode = usePreferDarkMode()

  const enabled = enabledState ?? preferDarkMode;

  useEffect(() => {
      const className = "dark-mode";
      const element = window.document.body;
      if(enabled) {
          element.classList.add(className)
      } else {
          element.classList.remove(className)
      }
  }, [enabled])
};

export default useDarkMode;
