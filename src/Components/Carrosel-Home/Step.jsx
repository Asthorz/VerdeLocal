import React from 'react';
import styled from 'styled-components';

const StepContainer = styled.div`
  text-align: left;
  margin: 0 20px; /* Adicionando margem para evitar que o conteúdo encoste nas bordas */

  @media (max-width: 768px) {
    margin: 0 10px; /* Ajuste para tablets e celulares */
  }

  @media (max-width: 480px) {
    margin: 0 5px; /* Ajuste para telas muito pequenas */
  }
`;

const StepTitle = styled.h2`
  font-size: 28px;
  color: #333;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 24px; /* Ajuste do tamanho do título em tablets */
  }

  @media (max-width: 480px) {
    font-size: 20px; /* Ajuste do tamanho do título em celulares */
  }
`;

const StepDescription = styled.p`
  font-size: 16px;
  color: #666;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 14px; /* Ajuste da fonte em tablets */
  }

  @media (max-width: 480px) {
    font-size: 12px; /* Ajuste da fonte em celulares */
  }
`;

const Step = ({ title, description }) => {
  return (
    <StepContainer>
      <StepTitle>{title}</StepTitle>
      <StepDescription>{description}</StepDescription>
    </StepContainer>
  );
};

export default Step;
