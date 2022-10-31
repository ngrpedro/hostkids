import "leaflet/dist/leaflet.css";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Router from "./Router";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Router />
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
