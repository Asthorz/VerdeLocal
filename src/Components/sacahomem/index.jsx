import React from 'react';
import styled from 'styled-components';
import { FaMoneyBillWave } from 'react-icons/fa'; // Ícone de dinheiro
import { FiSmartphone } from 'react-icons/fi'; // Ícone de celular (opcional)
import Alertcelular from '../../assets/imagem/notificacao.png';

// Estilização para o contêiner da página
const PageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 100px;
  padding: 0 20px;
`;

// Estilização para a seção esquerda
const LeftSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column; /* Alinha verticalmente */
`;

// Estilização para a notificação de celular
const PhoneNotification = styled.div`
width: 385px;
    height: 600px;
    /* background-color: #f4f4f4; */
    border-radius: 30px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    position: relative;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

// Estilização para o texto do produto
const ProductDetail = styled.p`
  font-size: 18px;
  color: #333;
  margin-top: 20px;
`;

// Estilização para a seção direita
const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

// Estilização para o ícone de dinheiro
const MoneyIcon = styled(FaMoneyBillWave)`
  color: green;
  font-size: 50px;
  margin-bottom: 20px;
`;

// Estilização para o texto de saque rápido
const WithdrawalText = styled.h3`
  font-size: 52px;
  color: black;
  text-align: center;
`;

// Estilização para o texto de descrição
const DescriptionText = styled.p`
  font-size: 24px;
  color: black;
  text-align: center;
  margin-top: 10px;
`;

// Estilização para as imagens da notificação
const NotificationImage = styled.img`
  width: 80%;
  max-width: 250px;
  margin-bottom: 10px;
`;

// Componente principal
const QuickWithdrawalPage = () => {
  return (
    <PageContainer>
      {/* Lado Esquerdo: Notificação de celular */}
      <LeftSection>
        <PhoneNotification>
          <NotificationImage src={Alertcelular} alt='Notificação'/>
          <NotificationImage src={Alertcelular} alt='Notificação'/>
          <NotificationImage src={Alertcelular} alt='Notificação'/>
          <NotificationImage src={Alertcelular} alt='Notificação'/>
          <NotificationImage src={Alertcelular} alt='Notificação'/>
        </PhoneNotification>
      </LeftSection>

      {/* Lado Direito: Saque rápido */}
      <RightSection>
        <MoneyIcon />
        <WithdrawalText>Saque rápido</WithdrawalText>
        <DescriptionText>
          As suas vendas via Pix são liberadas em 2 dias. Para as vendas via cartão, opte por receber em 15 ou 2 dias.
        </DescriptionText>
      </RightSection>
    </PageContainer>
  );
};

export default QuickWithdrawalPage;
