import AllPinsMap from "../components/AllPinsMap";
import SideBar from "../components/SideBar";
const InstituteView = () => {
  return (
    <div className="flex">
      <div className="hidden lg:block w-[22rem]">
        <SideBar />
      </div>
      <AllPinsMap />
    </div>
  );
};

export default InstituteView;
