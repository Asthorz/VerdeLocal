import styled from 'styled-components';

// Container da Navbar, com ajustes para mobile
export const NavbarContainer = styled.div`
  background-color: #fff;
  width: 100%;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 1000;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 12px 16px; /* Menos espaçamento em telas menores */
  }
`;

// Conteúdo da Navbar para alinhamento dos elementos
export const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1600px;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

// Logotipo e nome da marca
export const NavbarBrand = styled.div`
  display: flex;
  align-items: center;

  h2 {
    font-weight: 700;
    font-size: 1.5rem;
    color: #333;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }

    .dangerVerde {
      color: #4caf50; /* Cor verde */
    }
  }
`;

// Links de navegação
export const NavbarLinks = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none; /* Esconde os links em telas menores */
  }
`;

export const NavbarLink = styled.a`
  margin-left: 24px;
  color: #333;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;

  &:hover {
    color: #0d6ede;
  }

  &.login {
    color: #0d6ede;
  }
`;

// Botão para cadastro
export const ButtonCadastro = styled.button`
  background-color: #4caf50;
  color: #fff;
  padding: 10px 20px;
  border-radius: 25px;
  font-weight: 700;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
`;

// Ícone do menu hamburguer para mobile
export const ButtonIcon = styled.button`
  display: none; /* Esconde em telas grandes */
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block; /* Mostra em telas menores */
  }

  img {
    width: 28px;
    height: 28px;
  }
`;

// Estilo do menu dropdown mobile
export const MobileMenu = styled.div`
  display: none;
  flex-direction: column;
  align-items: flex-start;
  background-color: #fff;
  width: 100%;
  position: absolute;
  top: 60px;
  left: 0;
  padding: 10px 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? 'flex' : 'none')}; /* Mostrar ou esconder o menu */
  }

  a {
    padding: 10px 0;
    text-decoration: none;
    color: #333;
    width: 100%;
    font-weight: 600;
    text-align: left;

    &:hover {
      color: #0d6ede;
    }
  }
`;
