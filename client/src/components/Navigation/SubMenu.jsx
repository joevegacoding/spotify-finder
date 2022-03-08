import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledContainer = styled.div`
`;

const SidebarLink = styled(NavLink)`
  display: flex;
  min-width: 150px;
  width: 100%;
  color: white;
  justify-content: space-between;
  align-items: center;
  /* padding: 50px 35px; */
  


  list-style: none;
  text-decoration: none;
  &:hover {
    background: #252831;
text-decoration: none;

    }
  height: 60px;
  font-size: 1rem;

 &.is-active {
    background: #252831;
text-decoration: none;
    border-left: 4px solid green;
 }

 

  @media (max-width: 768px) {
    height: 100%;
    /* width: 20%; */
    margin-inline: auto;

    
  }

  .icon-container {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    /* margin-left: .7rem; */
    gap: 0.5rem;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`;

const SidebarLabel = styled.span``;

const SubMenu = ({ icon }) => {
  return (
    <StyledContainer>
      <SidebarLink activeClassName="is-active" to={icon.path}>
        <div className="icon-container">
          {icon.icon}
          <SidebarLabel>{icon.title}</SidebarLabel>
        </div>
      </SidebarLink>
    </StyledContainer>
  );
};

export default SubMenu;
