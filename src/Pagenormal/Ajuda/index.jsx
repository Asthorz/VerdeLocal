import React from 'react';
import Slogo from '../../assets/imagem/1-removebg-preview.png'
import styled from 'styled-components';
import { FaSearch, FaShoppingCart, FaTags, FaMoneyBillWave, FaInfoCircle, FaUsers, FaQuestionCircle, FaCogs, FaHandHoldingUsd } from 'react-icons/fa';

const AjudaContainer = styled.div`
  background-color: #fff;
  padding: 40px 24px;
  max-width: 1200px;
  margin: 100px auto;
  text-align: left;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

const Logo = styled.img`
  height: 60px;
`;

const BackButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 700;
  color: white;
  background-color: #4caf50;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.08);

  &:hover {
    background-color: #43a047;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  color: #333;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

const SearchInput = styled.input`
  padding: 12px 20px;
  font-size: 16px;
  border-radius: 25px 0 0 25px;
  border: 1px solid #ccc;
  width: 400px;
  outline: none;
`;

const SearchButton = styled.button`
  padding: 12px 15px;
  background-color: #4caf50;
  border: none;
  border-radius: 0 25px 25px 0;
  color: white;
  font-size: 18px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #43a047;
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background-color: #f8f8f8;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    font-size: 18px;
    color: #333;
    margin-top: 10px;
    font-weight: 700;
  }

  p {
    font-size: 14px;
    color: #666;
    margin-top: 10px;
    line-height: 1.4;
  }
`;

const IconContainer = styled.div`
  font-size: 36px;
  color: #4caf50;
`;

const Ajuda = () => {
  return (
    <AjudaContainer>
      <Header>
        <Logo src={Slogo} alt="Logo" />
        <BackButton onClick={() => window.location.href = '/'}>Voltar para o site</BackButton>
      </Header>

      <Title>Como podemos ajudar?</Title>

      <SearchContainer>
        <SearchInput placeholder="Buscar em nossa Central de Ajuda" />
        <SearchButton>
          <FaSearch />
        </SearchButton>
      </SearchContainer>

      <CardsContainer>
        <Card>
          <IconContainer><FaShoppingCart /></IconContainer>
          <h3>Comprei um produto</h3>
          <p>Tem um problema na sua compra? Podemos te ajudar!</p>
        </Card>
        <Card>
          <IconContainer><FaTags /></IconContainer>
          <h3>Produtos</h3>
          <p>Como cadastrar e gerenciar seus produtos.</p>
        </Card>
        <Card>
          <IconContainer><FaMoneyBillWave /></IconContainer>
          <h3>Financeiro</h3>
          <p>Tudo sobre pagamentos, taxas, saques, extrato.</p>
        </Card>
        <Card>
          <IconContainer><FaInfoCircle /></IconContainer>
          <h3>Sobre a Kiwify</h3>
          <p>Saiba mais sobre a nossa plataforma de infoprodutos.</p>
        </Card>
        <Card>
          <IconContainer><FaUsers /></IconContainer>
          <h3>Área de membros</h3>
          <p>Crie e configure a sua área de membros grátis.</p>
        </Card>
        <Card>
          <IconContainer><FaQuestionCircle /></IconContainer>
          <h3>Perguntas frequentes</h3>
          <p>Tire suas dúvidas e conheça as perguntas mais frequentes.</p>
        </Card>
        <Card>
          <IconContainer><FaCogs /></IconContainer>
          <h3>Configurações</h3>
          <p>Ajustes gerais da plataforma.</p>
        </Card>
        <Card>
          <IconContainer><FaHandHoldingUsd /></IconContainer>
          <h3>Afiliados</h3>
          <p>Venda o seu produto através de afiliados, ou afilie-se a produtos de outras pessoas.</p>
        </Card>
      </CardsContainer>
    </AjudaContainer>
  );
};

export default Ajuda;
