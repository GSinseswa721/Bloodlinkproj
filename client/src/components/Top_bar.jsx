import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import '../styles/top_bar.css'
import { FaUserCircle } from "react-icons/fa";
import { MdNightsStay } from "react-icons/md";
import { Switch } from "@mui/material";


const Top_bar = () => {
  return (
    <>
    <div>
      {/* <div className='Top_bar'> */}
        <header>
            <div class="message">
              <h3>Hi,Welcome back!</h3>
            </div>
            <div class="Profiles">
              <MdNightsStay />
                <div class="username">Account</div>
                <FaUserCircle className='account'/>
            </div>
        </header>
      {/* </div> */}
    </div>
      
    </>
  );
}

export default Top_bar
