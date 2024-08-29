import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f4f4f4;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const FooterText = styled.div`
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const FooterNav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 15px;
    justify-content: center;
  }

  li a {
    text-decoration: none;
    color: #007BFF; /* Cor azul para links */
    font-size: 16px;
  }

  li a:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        <p>Natural,
        Sustentável,Confiável,</p>
        <p>para consumidores conscientes
        e produtores locais.</p>
      </FooterText>
      <FooterNav>
        <ul>
          <li><a href="#inicio">Início</a></li>
          <li><a href="#area-de-membros">Área de membros</a></li>
          <li><a href="#recorrencia">Recorrência</a></li>
          <li><a href="#funcionalidades">Funcionalidades</a></li>
          <li><a href="#planos-e-taxas">Planos e taxas</a></li>
          <li><a href="#ajuda">Ajuda</a></li>
        </ul>
      </FooterNav>
    </FooterContainer>
  );
};

export default Footer;
