// Custom Hooks
import useLocalStorage from "../hooks/useLocalStorage";
import useToggle from "../hooks/useToggle";

const Toggle = (props: any) => {
  // -------------------------------------------------
  // Custom Hooks
  // -------------------------------------------------
  const [isToggleOn, toggleSetter] = useToggle();
  const [savedStorage, setSavedToggle] = useLocalStorage("darkmode", false)

  // -------------------------------------------------
  // Functions
  // -------------------------------------------------
  const handleToggleAction = (isDarkMode: boolean) => {
    toggleSetter()
    setSavedToggle(isDarkMode)
  }

  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <div className="dark-mode-toggle">
      <button type="button" onClick={() => handleToggleAction(false)}>
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
