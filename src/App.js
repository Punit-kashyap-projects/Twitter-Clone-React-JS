import "./App.css";
import Home from "./components/Home/Home";
import Interest from "./components/Interest.js/Interest";
import MenuBar from "./components/MenuBar/MenuBar";

function App() {
  return (
    <div id="mainContent">
      <MenuBar />
      <Home />
      <Interest/>
    </div>
  );
}

export default App;
