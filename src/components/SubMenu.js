import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
  display: flex;
  color: #848B93;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    border-left: 4px solid #1EB7FF;
    cursor: pointer;
    color:#243242;
    font-weight: 500;
  }
  &:active{
    border-left: 4px solid #243242;
    cursor: pointer;
    color:#243242;
    font-weight: 500;
  }
  
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: #fff;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #848B93;
  font-size: 18px;
  &:hover {
    color:#243242;
    font-weight: 500;  
    cursor: pointer;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;