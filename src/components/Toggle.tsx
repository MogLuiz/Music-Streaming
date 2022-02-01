// Custom Hook
import useToggle from "../hooks/useToggle";

const Toggle = (props: any) => {
  // -------------------------------------------------
	// Custom Hook
	// -------------------------------------------------
  const [isToggleOn, toggleSetter] = useToggle()

  // -------------------------------------------------
	// Render
	// -------------------------------------------------
  return (
    <div className="dark-mode-toggle">
      <button type="button" onClick={toggleSetter}>
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
      <button type="button" onClick={toggleSetter}>
        ☾
      </button>
    </div>
  )
}

export default Toggle;
