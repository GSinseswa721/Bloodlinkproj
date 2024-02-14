import Side_bar from "../../../components/Side_bar";
import DashBoard from "./DashBoard";

const AdminDashBoard = () => {
  return (
    <Side_bar>
      <div className=" w-[80vw] max-w-full ml-auto flex flex-col items-center my-5 overflow-y-hidden">
        <div className="w-full px-5">
          <DashBoard />
        </div>
      </div>
    </Side_bar>
  );
};

export default AdminDashBoard;
