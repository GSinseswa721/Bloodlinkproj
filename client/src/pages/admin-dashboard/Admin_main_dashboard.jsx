import React from 'react'
import Side_bar from '../../components/Side_bar'
import Top_bar from '../../components/Top_bar'
import { Outlet } from '@mui/icons-material'

const Admin_main_dashboard = () => {
  return (
    <>
    <div>
       <div>
       <Side_bar/>
       </div>
       <div>
        <Top_bar/>
        <Outlet/>
       </div>
    </div>
    </>
  )
}

export default Admin_main_dashboard