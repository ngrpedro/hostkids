import { ApolloProvider } from "@apollo/client";
import "leaflet/dist/leaflet.css";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Router from "./Router";
import { client } from "./services/apollo";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <NavBar />
        <Router />
        <Footer />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
