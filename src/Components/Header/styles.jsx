import styled from "styled-components";

export const Headerdash = styled.header`
  width: 100%;
  height: 90px;
  background-color: var(--color-white);
  box-shadow: var(--box-shadow);
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    height: 70px; /* Ajuste de altura para tablets e celulares */
  }

  @media (max-width: 480px) {
    height: 60px; /* Altura menor para telas de celulares */
  }
`;

export const Containerfluido = styled.div`
  width: 100%;

  .linha {
    margin: 0px !important;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
      flex-direction: column; /* Empilhar elementos em telas menores */
    }
  }

  .Links-logo {
    flex: 0 0 25%;

    @media (max-width: 768px) {
      flex: 0 0 100%; /* Ocupar 100% da largura em telas menores */
      text-align: center; /* Centralizar logo em telas menores */
    }
  }

  .Link {
    display: flex;
    align-items: center;
    text-decoration: none;
  }

  button.rounded-circle {
    min-height: 60px !important;
    width: 5px !important;
    height: 5px !important;
    background: #ffff !important;
    color: white;
    margin: 0 10px;

    &:active {
      color: blue;
    }
  }

  button.rounded-circle svg {
    color: black;
    font-size: 18px !important;
    transition: all 0 3s ease-in-out;

    &:hover {
      color: blue;
    }
  }
`;

export const Logomarcaimg = styled.img`
  width: 100px;

  @media (max-width: 768px) {
    width: 80px; /* Ajustar logo para telas menores */
  }

  @media (max-width: 480px) {
    width: 60px; /* Reduzir logo em celulares */
  }
`;

export const Logonome = styled.span`
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-weight: 800;
  color: black;

  .Danger {
    color: green;
  }

  @media (max-width: 768px) {
    font-size: 20px; /* Ajuste de fonte para telas menores */
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const Iconsheader = styled.div`
  margin: 0 25px;

  .Usermenu li {
    font-size: 15px;

    @media (max-width: 768px) {
      font-size: 14px;
    }

    @media (max-width: 480px) {
      font-size: 12px;
    }
  }
`;

export const Minhaacc = styled.button`
  border: 0px;
  background: transparent;
  display: flex;

  :active {
    color: blue;
  }

  .info {
    align-items: center;
    gap: 0;
    justify-content: flex-start;
    margin-bottom: 3px;
  }

  .rounded-circle {
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 40px;
    height: 40px;
    cursor: pointer;
    position: relative;
    border: 2px solid blue;
    padding: 2px;
    border-radius: 100%;

    @media (max-width: 768px) {
      width: 35px;
      height: 35px; /* Ajuste do tamanho do avatar para telas menores */
    }

    @media (max-width: 480px) {
      width: 30px;
      height: 30px;
    }
  }

  .perfilimg {
    object-fit: cover;
    width: 40px;

    @media (max-width: 768px) {
      width: 35px;
    }

    @media (max-width: 480px) {
      width: 30px;
    }
  }
`;

export const Userinfo = styled.div`
  padding-left: 10px;

  h4 {
    margin-bottom: 0px;
    font-size: 16px;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 14px;
    }

    @media (max-width: 480px) {
      font-size: 12px;
    }
  }

  p {
    margin-top: 0px;
    font-size: 12px;
    color: #000;
    opacity: 0.7;
    text-align: left !important;

    @media (max-width: 768px) {
      font-size: 11px;
    }

    @media (max-width: 480px) {
      font-size: 10px;
    }
  }
`;

export const Frasemenu = styled.h4`
  padding: 10px 25px;
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 8px 15px;
  }
`;

export const Usernotifi = styled.div`
  h4 {
    font-size: 13px;
    font-weight: 400;

    @media (max-width: 768px) {
      font-size: 12px;
    }

    @media (max-width: 480px) {
      font-size: 11px;
    }
  }
`;

export const Notifioper = styled.p`
  color: black;
  font-size: 12px;
  text-align: center;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 11px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

export const BtnFinalmenu = styled.div`
  text-align: center;
  border: 0px;
  background-color: transparent;
`;
