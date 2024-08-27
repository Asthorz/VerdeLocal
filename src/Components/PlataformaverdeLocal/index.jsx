import React from 'react';
import styled from 'styled-components';
import { FaCreditCard, FaRegClock } from 'react-icons/fa'; // Ícones para os cartões e tempo

// Estilização para o contêiner da página
const PageContainer = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

// Estilização para o título principal
const MainTitle = styled.h1`
    font-size: 60px;
    font-family: 'Fredoka', sans-serif;
    font-weight: 700;
    line-height: 70px;
    margin-top: 190px;
    margin-left: 3rem;
    text-align: center;
`;

// Estilização para o subtítulo
const SubTitle = styled.h2`
  font-size: 24px;
  color: #000000;
  text-align: center;
  margin-bottom: 40px;
`;

// Estilização para a descrição
const Description = styled.p`
  font-size: 18px;
  color: #000000;
  text-align: center;
  margin-bottom: 40px;
`;

// Estilização para o contêiner dos cartões
const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

// Estilização para cada cartão
const Card = styled.div`
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  width: 250px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// Estilização para o ícone no cartão
const CardIcon = styled.div`
  font-size: 50px;
  color: #007bff;
  margin-bottom: 10px;
`;

// Estilização para o texto do cartão
const CardText = styled.p`
  font-size: 16px;
  color: #333;
  margin: 0;
`;

const Plataforma = () => {
  return (
    <PageContainer>
      {/* Título Principal */}
      <MainTitle>A VerdeLocal tem a melhor tecnologia</MainTitle>
      
      {/* Subtítulo */}
      <SubTitle>
        Nossa plataforma é simples e fácil de usar. Crie uma conta e comece a vender em 2 minutos.
      </SubTitle>

      {/* Descrição Adicional */}
      <Description>
        Temos todas as funcionalidades que você precisa para vender o seu infoproduto:
      </Description>

      {/* Contêiner de Cartões */}
      <CardsContainer>
        {Array(8).fill(null).map((_, index) => (
          <Card key={index}>
            <CardIcon>
              <FaCreditCard />
              <FaRegClock />
            </CardIcon>
            <CardText>
              Receba cartão e Pix em até 2 dias.
            </CardText>
          </Card>
        ))}
      </CardsContainer>
    </PageContainer>
  );
};

export default Plataforma;
