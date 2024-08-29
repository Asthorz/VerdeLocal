import React from 'react';
import styled from 'styled-components';

const StepContainer = styled.div`
  text-align: left;
`;

const StepTitle = styled.h2`
  font-size: 28px;
  color: #333;
  font-weight: 700;
`;

const StepDescription = styled.p`
  font-size: 16px;
  color: #666;
  margin-top: 10px;
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
