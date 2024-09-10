import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f4f4f4;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    padding: 30px 15px;
  }

  @media (max-width: 480px) {
    padding: 20px 10px;
  }
`;

const FooterText = styled.div`
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
  color: #333;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }

  p {
    margin: 5px 0;
  }
`;

const FooterNav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 15px;
    justify-content: center;
    flex-wrap: wrap;

    @media (max-width: 768px) {
      gap: 10px;
    }

    @media (max-width: 480px) {
      flex-direction: column;
      gap: 5px;
    }
  }

  li a {
    text-decoration: none;
    color: #007BFF;
    font-size: 16px;

    @media (max-width: 768px) {
      font-size: 14px;
    }

    @media (max-width: 480px) {
      font-size: 13px;
    }
  }

  li a:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        <p>Natural, Sustentável, Confiável,</p>
        <p>para consumidores conscientes e produtores locais.</p>
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
