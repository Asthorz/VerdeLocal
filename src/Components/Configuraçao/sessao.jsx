import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Panel = styled.div`
  background-color: var(--color-white);
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  box-shadow: var(--box-shadow);
  text-align: center;
`;

const UserName = styled.h2`
  margin-bottom: 10px;
  color: #333;
`;

const UserInfo = styled.p`
  margin: 5px 0;
  color: #555;

  strong {
    color: #000;
  }
`;

const ProfileImageContainer = styled.div`
  position: relative;
  margin-bottom: 15px;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #007bff;
`;

const UploadLabel = styled.label`
  display: inline-block;
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #007bff;
  color: white;
  border-radius: var(--card-border-radius);
  width: 25px;
  height: 25px;
  text-align: center;
  line-height: 25px;
  cursor: pointer;
  font-size: 16px;
  left: 148px;
`;

const UploadInput = styled.input`
  display: none;
`;

const InputField = styled.input`
  width: 100%;
  padding: 8px;
  margin: 8px 0;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

const HighlightedInfo = styled.div`
  background-color: #f0f0f0;
  padding: 15px;
  border-radius: 8px;
  margin-top: 20px;
`;

const HighlightedText = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #007bff;
`;

const UserPanel = () => {
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const user = {
    nome: 'Eduardo Da Silva Melo',
    email: 'eduar**********@gmail.com',
    verificacao: 'Dados pendentes',
    idioma: 'Português (BR)',
    municipio: 'São Paulo',
    cpf: '',
    vendasFisicas: 120, // Exemplo de vendas físicas
    tempoDeUso: '6 meses', // Exemplo de tempo de uso
  };

  return (
    <Container>
      <Panel>
        <ProfileImageContainer>
          <ProfileImage 
            src={profileImage || 'https://via.placeholder.com/100'} 
            alt="Foto de perfil" 
          />
          <UploadLabel htmlFor="upload-photo">+</UploadLabel>
          <UploadInput 
            id="upload-photo" 
            type="file" 
            accept="image/*" 
            onChange={handleImageChange} 
          />
        </ProfileImageContainer>
        <div className='Perfil'>
          <UserName>{user.nome}</UserName>
          <UserInfo><strong>Email:</strong> {user.email}</UserInfo>
          <UserInfo><strong>Verificação:</strong> {user.verificacao}</UserInfo>
          <UserInfo><strong>Idioma:</strong> {user.idioma}</UserInfo>
          <UserInfo><strong>Município:</strong> {user.municipio}</UserInfo>
          <InputField 
            type="text" 
            placeholder="CPF (pendente)" 
            value={user.cpf} 
            // Atualizar CPF quando necessário
            onChange={(e) => { user.cpf = e.target.value; }}
          />
        </div>
      </Panel>

      <Panel>
        <HighlightedInfo>
          <HighlightedText>Vendas Físicas: {user.vendasFisicas}</HighlightedText>
          <HighlightedText>Tempo de Uso: {user.tempoDeUso}</HighlightedText>
          <HighlightedText>Total Vendido: R$ 15.000,00</HighlightedText> {/* Exemplo de valor total vendido */}
        </HighlightedInfo>
      </Panel>
    </Container>
  );
};

export default UserPanel;
