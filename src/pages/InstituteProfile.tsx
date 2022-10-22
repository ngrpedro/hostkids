import InstituteForm from "../components/InstituteForm";
import SideBar from "../components/SideBar";

const InstituteProfile = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1 bg-slate-200 p-16">
        <InstituteForm />
      </div>
    </div>
  );
};

export default InstituteProfile;
