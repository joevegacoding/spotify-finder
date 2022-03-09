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

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 1.5rem;
  color: white;
  height: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  /* max-width: 300px; */

  width: 150px;
  box-sizing: border-box;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;

  transition: 0.3s ease-in-out;
  z-index: 10;

  @media (max-width: 768px) {
    bottom: 0;
    top: 92vh;
    width: 100%;
    height: 9vh;
  }
`;

const SidebarWrap = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  width: 100%;
  margin-top: 4rem;

  justify-content: flex-start;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 0;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-inline: auto;
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
        </SidebarWrap>
      </SidebarNav>
    </>
  );
};

export default Sidebar;
