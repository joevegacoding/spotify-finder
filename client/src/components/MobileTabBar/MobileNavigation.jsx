import React from 'react'
import { Link } from 'react-router-dom';
import Paper from "@mui/material/Paper";
import * as MdIcons from "react-icons/md";
import * as GiIcons from 'react-icons/gi';
import * as BsIcons from 'react-icons/bs';
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import styled from "styled-components";

const MobileContainer = styled(Link)`
 @media (min-width: 768px) {
     display: none;
 }
`;



const MobileNavigation = () => {
  return (

<MobileContainer>
    <Paper
    sx={{
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      

    }}
    elevation={3}
  >
    <BottomNavigation
      showLabels
      sx={{
        backgroundColor: "black",
        color: "white",
        "& .MuiBottomNavigationAction-root": {
          color: "white",
          
        },
        "& svg": {

          transform: "scale(1.5)"
        },
        "& .Mui-selected, .Mui-selected > svg": {
          color: "#1DB954"
        },
      
      }}

    >
      <BottomNavigationAction
      component={Link}
      to="/top-tracks"
      sx={{gap: '10%'}}
        label="Top Songs"
        icon={<MdIcons.MdLibraryMusic />}
      />
      <BottomNavigationAction
       component={Link}
       to="/top-artists"
      sx={{gap: '10%'}}
        label="Artists"
        icon={<GiIcons.GiMicrophone/>}
      />
      <BottomNavigationAction
       component={Link}
       to="/playlists"
        sx={{gap: '10%'}}
        label="Playlists"
        icon={ <MdIcons.MdAlbum/>}
      />
      <BottomNavigationAction
       component={Link}
       to="/profile"
        sx={{gap: '10%'}}
        label="Profile"
        icon={<BsIcons.BsFillPersonFill/>}
      />
    </BottomNavigation>
  </Paper>
  </MobileContainer>
  )
}

export default MobileNavigation