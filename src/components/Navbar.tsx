// Components
import Toggle from "./Toggle";

// Custom Hook
import useDarkMode from "../hooks/useDarkMode";

export default function Navbar() {
  // -------------------------------------------------
  // Custom Hooks
  // -------------------------------------------------
  const [darkMode, setDarkMode] = useDarkMode();

  // -------------------------------------------------
  // Return
  // -------------------------------------------------
  return (
    <div className="navbar">
      <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}
