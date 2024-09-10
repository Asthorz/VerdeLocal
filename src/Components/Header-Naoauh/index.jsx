import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  NavbarContainer, 
  NavbarContent, 
  NavbarBrand, 
  NavbarLinks, 
  NavbarLink, 
  ButtonCadastro, 
  ButtonIcon, 
  MobileMenu 
} from './styles'; // Certifique-se de que o caminho esteja correto
import Logoimg from '../../assets/imagem/1-removebg-preview.png';
import { GiHamburgerMenu } from "react-icons/gi";
 // Ícone de menu hamburguer

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar o menu

  const handleCadastroClick = () => {
    navigate('/Cadastre-se');
  };

  const handleLoginClick = () => {
    navigate('/Login');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Abre/fecha o menu
  };

  return (
    <NavbarContainer>
      <NavbarContent>
        <NavbarBrand>
          <img src={Logoimg} alt="Logo" style={{ width: '50px', height: '50px' }} />
          <h2>Local <span className="dangerVerde">Verde</span></h2>
        </NavbarBrand>
        
        {/* Links para desktop */}
        <NavbarLinks>
          <NavbarLink href="#">Início</NavbarLink>
          <NavbarLink href="#teste">Taxas</NavbarLink>
          <NavbarLink href="/Ajudar">Ajudar</NavbarLink>
        </NavbarLinks>

        <NavbarLinks>
          <NavbarLink href="#" onClick={handleLoginClick} className="login">Login</NavbarLink>
          <ButtonCadastro onClick={handleCadastroClick}>Cadastrar agora</ButtonCadastro>
        </NavbarLinks>

        {/* Menu hamburguer para mobile */}
        <ButtonIcon onClick={toggleMenu}>
          <GiHamburgerMenu />
        </ButtonIcon>
      </NavbarContent>

      {/* Menu mobile dropdown */}
      <MobileMenu open={menuOpen}>
        <NavbarLink href="#">Início</NavbarLink>
        <NavbarLink href="#teste">Taxas</NavbarLink>
        <NavbarLink href="/Ajudar">Ajudar</NavbarLink>
        <NavbarLink href="#" onClick={handleLoginClick} className="login">Login</NavbarLink>
        <ButtonCadastro onClick={handleCadastroClick}>Cadastrar agora</ButtonCadastro>
      </MobileMenu>
    </NavbarContainer>
  );
}
