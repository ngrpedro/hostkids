import "leaflet/dist/leaflet.css";
import { BrowserRouter } from "react-router-dom";
import TopBar from "./components/TopBar";
import Router from "./Router";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Router />
    </BrowserRouter>
  );
}

export default App;
