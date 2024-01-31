import React from 'react'
import Side_bar from '../../components/Side_bar'
import { Outlet } from 'react-router-dom'
import Top_bar from '../../components/Top_bar'
import '../../styles/main_dashboard.css'

const Main_dashboard = () => {
  return (
   <>
    <div className='Part_side_bar'>

        <div className='main_side_bar'>
          <Side_bar />
          </div>

        <div className='Part_top_outlet'>

            <div className='topbar'>
              <Top_bar />
              </div>

            <div className='ooutlet'>
              
              <Outlet />
              </div>

        </div>
        
    </div>
   </>
  )
}

export default Main_dashboard