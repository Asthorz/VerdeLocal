import styled from 'styled-components';

// Estilos para o painel
export const Panel = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  text-align: center;
`;

export const UserName = styled.h2`
  margin-bottom: 10px;
  color: #333;
`;

export const UserInfo = styled.p`
  margin: 5px 0;
  color: #555;

  strong {
    color: #000;
  }
`;

// Estilos para o upload da imagem
export const ProfileImageContainer = styled.div`
  position: relative;
  margin-bottom: 15px;
`;

export const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

export const UploadLabel = styled.label`
  display: inline-block;
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #007bff;
  color: white;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  text-align: center;
  line-height: 25px;
  cursor: pointer;
  font-size: 16px;
`;

export const UploadInput = styled.input`
  display: none;
`;