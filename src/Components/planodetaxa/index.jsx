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
`;

const PlanoTitle = styled.h2`
  font-size: 24px;
  color: #333;
  font-weight: 700;
  margin-bottom: 15px;
`;

const PlanoDescription = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.5;
  margin-bottom: 25px;
`;

const PlanoTax = styled.p`
  font-size: 20px;
  color: #333;
  font-weight: 700;
  margin: 10px 0;
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
