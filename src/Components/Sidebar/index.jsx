import { useState } from 'react';
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { FaStore } from "react-icons/fa";
import { BsHandbagFill } from "react-icons/bs";
import { MdOutlineAssessment, MdSell } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { IoChatbubbleSharp } from "react-icons/io5";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

import {
  ContainerDash,
  Aside,
  SidebarMenu,
  MenuItem,
  Icon,
  MenuItemText,
  MessageCount
} from './styles';

export default function Sidebar() {
  const [activeSidebar, setActiveSidebar] = useState(null);

  const handleSidebarClick = (index) => {
    setActiveSidebar(index);
  };

  return (
    <ContainerDash>
      <Aside>
        <SidebarMenu>
          <MenuItem 
            href='/Dashboard' 
            className={`w-100 ${activeSidebar === 0 ? 'active' : ''}`} 
            onClick={() => handleSidebarClick(0)}
          >
            <Icon><RiDashboardHorizontalFill /></Icon>
            <MenuItemText>Dashboard</MenuItemText>
          </MenuItem>
          <MenuItem 
            href='/Vendas'
            className={`w-100 ${activeSidebar === 1 ? 'active' : ''}`}
            onClick={() => handleSidebarClick(1)}
          >
            <Icon><MdSell /></Icon>
            <MenuItemText>Vendas</MenuItemText>
            <MessageCount>27</MessageCount>
          </MenuItem>
          <MenuItem 
            href='/Marketplace' 
            className={`w-100 ${activeSidebar === 2 ? 'active' : ''}`} 
            onClick={() => handleSidebarClick(2)}
          >
            <Icon><FaStore /></Icon>
            <MenuItemText>Marketplace</MenuItemText>
          </MenuItem>
          <MenuItem 
            href='/Produtos' 
            className={`w-100 ${activeSidebar === 3 ? 'active' : ''}`} 
            onClick={() => handleSidebarClick(3)}
          >
            <Icon><BsHandbagFill /></Icon>
            <MenuItemText>Produtos</MenuItemText>
          </MenuItem>
          <MenuItem 
            href='/Finanças' 
            className={`w-100 ${activeSidebar === 4 ? 'active' : ''}`} 
            onClick={() => handleSidebarClick(4)}
          >
            <Icon><RiMoneyDollarCircleFill /></Icon>
            <MenuItemText>Finanças</MenuItemText>
          </MenuItem>
          <MenuItem 
            href='/Configuração' 
            className={`w-100 ${activeSidebar === 5 ? 'active' : ''}`} 
            onClick={() => handleSidebarClick(5)}
          >
          
          
          </MenuItem>
          <MenuItem 
            href='Configuração' 
            className={`last w-100 ${activeSidebar === 6 ? 'active' : ''}`} 
            onClick={() => handleSidebarClick(6)}
          >
            <Icon><IoMdSettings /></Icon>
            <MenuItemText>Configuração</MenuItemText>
          </MenuItem>
        </SidebarMenu>
      </Aside>
    </ContainerDash>
  );
}
