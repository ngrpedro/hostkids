import AllPinsMap from "../components/AllPinsMap";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";

const InstituteView = () => {
  return (
    <div className="flex flex-col relative">
      <div className="block lg:hidden">
        <TopBar />
      </div>
      <div className="hidden lg:block w-[22rem]">
        <SideBar />
      </div>
      <div className="">
        <AllPinsMap />
      </div>
    </div>
  );
};

export default InstituteView;
