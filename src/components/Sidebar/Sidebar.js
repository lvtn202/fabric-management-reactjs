import React, { useState } from "react";
import styled from "styled-components";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubNav";

const SidebarNav = styled.nav`
  background-color: #f8f9fa!important;
  width: 225px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 56px;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </SidebarWrap>
      </SidebarNav>
    </>
  );
};

export default Sidebar;
