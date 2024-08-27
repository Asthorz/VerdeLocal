import React from 'react';
import styled from 'styled-components';
import { FaHeadset } from 'react-icons/fa'; // Ícone de headset
import { ButtonHome } from '../../Pagenormal/home/styles';
import { useNavigate } from 'react-router-dom';

// Estilo para o contêiner principal
const Alertinico = styled.div`
  h1 {
    font-size: 60px;
    font-family: 'Fredoka', sans-serif;
    font-weight: 700;
    line-height: 70px;
    margin-top: 190px;
    margin-left: 3rem;
    text-align: center;
  }
`;

const Homealert = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

// Estilo para o contêiner de alerta
const AlertContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f4f4f4;
  border-radius: 25px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 1373px;
  height: 337px;
  max-width: 1386px;
`;

// Estilo para a seção do texto
const AlertText = styled.div`
  flex: 1;
  text-align: center;

  h4 {
    margin-bottom: 10px;
    font-size: 39px;
    color: green;
    font-weight: bold;
    
  }

  p {
    margin: 0;
    font-size: 20px;
    color: #000000;
  }

  .buttonaler {
    margin-left: 10rem;
    width: 17rem;
    height: 4rem;
  }
`;

// Estilo para a seção do ícone
const IconContainer = styled.div`
  margin-left: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AlertComponent = () => {
  const navigate = useNavigate();

  const handleCadastroClick = () => {
    navigate('/Cadastre-se');
  };

  return (
    <div>
      <Alertinico>
        <h1 className='descrealer'>
          Na VerdeLocal temos verdadeiro suporte
          <br />
          para você.
        </h1>
      </Alertinico>

      <Homealert>
        <AlertContainer>
          <AlertText>
            <h4>Atendimento em 1 minuto, 7 dias por semana</h4>
            <p>
              Na VerdeLocal você tem suporte especializado 7 dias por semana, das 08h00 até às 21h00, através de chat ao vivo. Com uma equipe que te responde em apenas um minuto. Sem robôs ou automações, você tem sempre uma pessoa especializada pronta para te ajudar.
            </p>
            <ButtonHome onClick={handleCadastroClick} className='buttonaler'>
              Cadastrar agora
            </ButtonHome>
          </AlertText>
          <IconContainer>
            <FaHeadset size={100} color="#008000" />
          </IconContainer>
        </AlertContainer>
      </Homealert>
    </div>
  );
};

export default AlertComponent;
