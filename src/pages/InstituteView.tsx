import AllInstitutes from "../components/AllInstitutes";
import AllPinsMap from "../components/AllPinsMap";

const InstituteView = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <div className="col-span-2 h-72 bg-gray-300"></div>
      <AllInstitutes />
        <AllPinsMap />
    </div>
  );
};

export default InstituteView;
