import "leaflet/dist/leaflet.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Router from "./Router";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Router />
    </BrowserRouter>
  );
}

export default App;
