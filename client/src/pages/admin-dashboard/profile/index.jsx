import Side_bar from "../../../components/Side_bar";
import Profile from "./Profile";

const EditProfile = () => {
  return (
    <Side_bar>
      <div className=" w-[80vw] max-w-full ml-auto h-screen flex flex-col justify-center items-center">
        <div className=" w-[40%] ">
          <Profile />
        </div>
      </div>
    </Side_bar>
  );
};

export default EditProfile;
