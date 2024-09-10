import styled from "styled-components";

export const Seachbox = styled.div`
  width: 400px;
  height: 50px;
  background: var(--color-background);
  border-radius: 6px;
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 10px;
  padding: 3px 15px;

  svg {
    font-size: 20px;
    color: black;
  }

  @media (max-width: 768px) {
    width: 300px; /* Reduz a largura da caixa de pesquisa em tablets */
    height: 45px; /* Ajusta a altura da caixa de pesquisa */
  }

  @media (max-width: 480px) {
    width: 100%; /* A caixa de pesquisa ocupa toda a largura disponível em celulares */
    height: 40px; /* Ajusta ainda mais a altura para telas menores */
    margin-left: 0; /* Remove a margem lateral em celulares */
    padding: 3px 10px; /* Ajuste do padding para celulares */
  }
`;

export const InputSeach = styled.input`
  background: transparent;
  border: 0px;
  outline: none;
  padding-left: 10px;
  font-size: 16px;
  color: black;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 14px; /* Ajusta o tamanho da fonte em tablets */
  }

  @media (max-width: 480px) {
    font-size: 12px; /* Ajusta o tamanho da fonte em celulares */
    padding-left: 5px; /* Reduz o espaçamento interno em telas menores */
  }
`;
