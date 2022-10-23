import AllPinsMap from "../components/AllPinsMap";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";

const InstituteView = () => {
  return (
    <div className="flex relative">
      <div className="block lg:hidden">
        <TopBar />
      </div>
      <div className="hidden lg:block w-[22rem]">
        <SideBar />
      </div>
      <AllPinsMap />
    </div>
  );
};

export default InstituteView;
