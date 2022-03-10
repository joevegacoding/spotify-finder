import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as GiIcons from "react-icons/go";
import * as BsIcons from "react-icons/bs";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import GitHubIcon from '@mui/icons-material/GitHub';


const SidebarNav = styled.nav`
  background: #15171c;
  width: 150px;
  box-sizing: border-box;
  height: 100vh;
  display: flex;
  justify-content: space-around;

  position: fixed;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  z-index: 10;

  @media (max-width: 768px) {

    display: none;
  }


`;

const SidebarWrap = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  width: 100%;
  margin-top: 5rem;

  justify-content: flex-start;
  align-items: center;



`;

const GitHubContainer = styled.div`
  margin-top: 90%;
  transition: transform 0.5s ;


 :hover {
   color: #1DB954;
   transform: translateY(-10%) ;
 }


`;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openSideBar = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  return (
    <>
      <SidebarNav>
       
        <SidebarWrap>
          {SidebarData.map((icon, index) => {
            return <SubMenu icon={icon} key={index} />;
          })}
          <GitHubContainer>
            <a href="https://github.com/joevegacoding/spotify-finder" target="_blank" >
          <GitHubIcon/>
          </a>
          </GitHubContainer>
        </SidebarWrap>
    

      </SidebarNav>
    </>
  );
};

export default Sidebar;
