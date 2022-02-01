// Components
import Toggle from "./Toggle";

export default function Navbar() {
  // -------------------------------------------------
	// Return
	// -------------------------------------------------
  return (
    <div className="navbar">
      <Toggle darkMode={false} setDarkMode={() => false} />
    </div>
  );
}
