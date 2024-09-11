import styled from "styled-components";

// Estilização principal da página Home
export const Mainhome = styled.div`
  .Homeh1 {
    font-size: 3.75rem; /* Usando rem para maior flexibilidade */
    font-family: 'Fredoka', sans-serif;
    font-weight: 700;
    line-height: 1.2; /* Definindo line-height relativo */
    margin-top: 10rem; /* Unidades rem em vez de pixels */
    margin-left: 3rem;

    @media (max-width: 768px) {
      font-size: 2.5rem; /* Ajuste para tablets */
      margin-top: 5rem;
    }

    @media (max-width: 480px) {
      font-size: 2rem; /* Ajuste para celulares */
      margin-top: 5rem;
      margin-left: 1.5rem;
    }
  }

  .homeh3 {
    font-size: 1.375rem; /* Usando rem */
    font-family: 'Montserrat', sans-serif;
    margin-left: 3rem;
    font-weight: 400;

    @media (max-width: 768px) {
      font-size: 1.2rem; /* Ajuste para tablets */
      margin-left: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1rem; /* Ajuste para celulares */
      margin-left: 1rem;
    }
  }
`;

// Estilização do botão da Home
export const ButtonHome = styled.button`
  border: none; /* Removido o valor incorreto de 25px no border */
  height: 50px;
  font-weight: 700;
  width: 12.6875rem; /* Convertido para rem (203px) */
  margin-top: 1rem; /* Ajustado */
  border-radius: 25px;
  background-color: #4caf50;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  margin-left: 3rem;

  @media (max-width: 768px) {
    width: 10rem; /* Ajuste para tablets */
    margin-left: 2rem;
  }

  @media (max-width: 480px) {
    width: 9rem; /* Ajuste para celulares */
    margin-left: 1rem;
  }
`;

// Estilização do alerta da Home
export const Homealert = styled.div`
  .alert {
    height: 10px;
    width: 10px;

    @media (max-width: 768px) {
      height: 8px;
      width: 8px;
    }

    @media (max-width: 480px) {
      height: 6px;
      width: 6px;
    }
  }
`;
