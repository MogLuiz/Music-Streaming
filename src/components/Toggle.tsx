// Custom Hooks
import useLocalStorage from "../hooks/useLocalStorage";
import useMediaQuery from "../hooks/useMedia";
import useToggle from "../hooks/useToggle";

const Toggle = (props: any) => {
  // -------------------------------------------------
  // Custom Hooks
  // -------------------------------------------------
  const [isToggleOn, toggleSetter] = useToggle();
  const [savedStorage, setSavedToggle] = useLocalStorage("darkmode", false);
  const backgroundColor = useMediaQuery(
    ["(min-width: 1500px)", "(min-width: 1000px)", "(min-width: 600px)"],
    ["red", "blue", "green"],
    "black"
  );

  // -------------------------------------------------
  // Functions
  // -------------------------------------------------
  const handleToggleAction = (isDarkMode: boolean) => {
    toggleSetter();
    setSavedToggle(isDarkMode);
  };

  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <div className="dark-mode-toggle">
      <button
        type="button"
        style={{ backgroundColor }}
        onClick={() => handleToggleAction(false)}
      >
        ☀
      </button>
      <span className="toggle-control">
        <input
          className="dmcheck"
          id="dmcheck"
          type="checkbox"
          checked={isToggleOn}
          onChange={toggleSetter}
        />
        <label htmlFor="dmcheck" />
      </span>
      <button type="button" onClick={() => handleToggleAction(true)}>
        ☾
      </button>
    </div>
  );
};

export default Toggle;
