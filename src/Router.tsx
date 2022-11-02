import { Route, Routes } from "react-router-dom";
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import InstituteProfile from "./pages/InstituteProfile";
import InstituteView from "./pages/InstituteView";

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/InstituteView" element={<InstituteView />}/>
        <Route path="/InstituteView/:id" element={<InstituteProfile />}/>
        <Route path="/ContactUs" element={<ContactUs />}/>
    </Routes>
  );
};

export default Router;
