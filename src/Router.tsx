import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import InstituteProfile from "./pages/InstituteProfile";
import InstituteView from "./pages/InstituteView";

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/InstituteView" element={<InstituteView />}/>
        <Route path="/InstituteProfile" element={<InstituteProfile />}/>
    </Routes>
  );
};

export default Router;
