import React from 'react'
import '../../styles/main_dashboard.css'
import { Outlet } from 'react-router-dom'
import Side_bar from '../../components/Side_bar'
import Top_bar from '../../components/Top_bar'


const Main_hospital_dashboard = () => {
  return (
    <>
      <div className="Part_side_bar">
        <div className="main_side_bar">
          <Side_bar />
        </div>

        <div className="Part_top_outlet">
          <div className="topbar">
            <Top_bar />
          </div>

          <div className="ooutlet">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main_hospital_dashboard