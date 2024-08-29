import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  NavbarContainer, 
  NavbarContent, 
  NavbarBrand, 
  NavbarLink, 
  ButtonCadastro, 
  NavbarLogoLeft, 
  WNav, 
  WNavOverlay, 
  Line, 
  LogoImage
} from './styles';
import Logoimg from '../../assets/imagem/1-removebg-preview.png'
export default function Navbar() {
  const navigate = useNavigate();

  const handleCadastroClick = () => {
    navigate('/Cadastre-se');
  };

  const handleLoginClick = () => {
    navigate('/Login');
  };

  return (
    <div>
      <NavbarLogoLeft>
        <NavbarContainer>
          <NavbarContent>
            <NavbarBrand>
              <LogoImage src={Logoimg} alt='asd'/>
          
            </NavbarBrand>
            <nav className='d-flex'>
              <NavbarLink href="#">Início</NavbarLink>
              <NavbarLink href="#teste">Taxas</NavbarLink>
              <NavbarLink href="/Ajudar">Ajudar</NavbarLink>
            </nav>
            <nav className='d-flex'>
              <NavbarLink href="#" onClick={handleLoginClick} className="login">
                Login
              </NavbarLink>
              <ButtonCadastro onClick={handleCadastroClick} className=''>
                Cadastrar agora
              </ButtonCadastro>
            </nav>
          </NavbarContent>
        </NavbarContainer>
      </NavbarLogoLeft>
      
    </div>
  );
}
