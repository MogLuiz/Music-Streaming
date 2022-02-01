// Pages
import Playlist from "./pages/Playlist";

// Components
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  // -------------------------------------------------
	// Render
	// -------------------------------------------------
  return (
    <div>
      <Navbar />
      <div className="container">
        <Header />
        <Playlist />
      </div>
    </div>
  );
}

export default App;
