import React, { useState } from 'react';
import styled from 'styled-components';
import Step from './Step';

const OnboardingContainer = styled.div`
  background-color: #fff;
  padding: 40px 24px;
  border-radius: 10px;
  max-width: 800px;
  margin: 100px auto 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 12px 24px;
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

const Onboarding = () => {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: 'Cadastro de conta',
      description: 'Clique no botão "Cadastre-se". Insira as informações solicitadas e siga o fluxo de boas-vindas.',
    },
    {
      title: 'Confirmação de e-mail',
      description: 'Acesse sua caixa de entrada e clique no link de confirmação para validar seu cadastro.',
    },
    {
      title: 'Informações complementares',
      description: 'Complete seu perfil adicionando informações complementares.',
    },
    {
      title: 'Painel do produtor',
      description: 'Uma vez logado e com os dados cadastrados, você já pode criar um novo produto.',
    },
    {
      title: 'Preencha as informações básicas',
      description: 'Preencha as informações básicas sobre o seu produto, como o nome, descrição, categoria, e etc.',
    },
    {
      title: 'Link de vendas',
      description: 'Agora você pode usar o link de checkout em suas estratégias de marketing, incorporando em sites, ou utilizando em campanhas de e-mail e redes sociais.',
    },
  ];

  const handleNextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  return (
    <OnboardingContainer>
      <Step title={steps[step].title} description={steps[step].description} />
      {step < steps.length - 1 && (
        <Button onClick={handleNextStep}>Próxima Etapa</Button>
      )}
    </OnboardingContainer>
  );
};

export default Onboarding;
