// import "../styles/dashboard.css";
import Side_bar from "../components/Side_bar";
import Profile from "./admin-dashboard/profile/Profile";
// import Top_bar from '../components/Top_bar';

function Dashboard() {
  return (
    <>
      <Side_bar>
        <Profile />
      </Side_bar>
    </>
  );
}

export default Dashboard;
