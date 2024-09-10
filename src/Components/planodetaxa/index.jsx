import React from 'react';
import styled from 'styled-components';

const PlanoContainer = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  max-width: 350px;
  margin: 100px auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 20px; /* Ajuste de padding para tablets */
    margin: 50px auto; /* Diminui o espaçamento superior em tablets */
    max-width: 300px; /* Reduz a largura máxima em tablets */
  }

  @media (max-width: 480px) {
    padding: 15px; /* Ajuste de padding para celulares */
    margin: 30px auto; /* Diminui o espaçamento superior em celulares */
    max-width: 100%; /* Ocupar a largura completa da tela */
  }
`;

const PlanoTitle = styled.h2`
  font-size: 24px;
  color: #333;
  font-weight: 700;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 22px; /* Ajuste do tamanho da fonte para tablets */
  }

  @media (max-width: 480px) {
    font-size: 20px; /* Ajuste do tamanho da fonte para celulares */
  }
`;

const PlanoDescription = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.5;
  margin-bottom: 25px;

  @media (max-width: 768px) {
    font-size: 15px; /* Ajuste do tamanho da fonte para tablets */
  }

  @media (max-width: 480px) {
    font-size: 14px; /* Ajuste do tamanho da fonte para celulares */
    margin-bottom: 20px; /* Reduz o espaçamento inferior para celulares */
  }
`;

const PlanoTax = styled.p`
  font-size: 20px;
  color: #333;
  font-weight: 700;
  margin: 10px 0;

  @media (max-width: 768px) {
    font-size: 18px; /* Ajuste do tamanho da fonte para tablets */
  }

  @media (max-width: 480px) {
    font-size: 16px; /* Ajuste do tamanho da fonte para celulares */
    margin: 8px 0; /* Ajuste do espaçamento para telas menores */
  }
`;

const PlanoSimples = () => {
  return (
    <PlanoContainer id="teste">
      <PlanoTitle>Padrão</PlanoTitle>
      <PlanoDescription>
        Receba pagamentos de forma simples, com uma plataforma sem custos ocultos.
      </PlanoDescription>
      <PlanoTax>Garantir taxa</PlanoTax>
      <PlanoTax>4,9% + R$2,00 por venda aprovada</PlanoTax>
    </PlanoContainer>
  );
};

export default PlanoSimples;
