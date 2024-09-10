import styled from "styled-components";

export const NewContas = styled.div`
  margin-top: 1.3rem;

  @media (max-width: 768px) {
    margin-top: 1rem; /* Ajuste para telas menores */
  }

  @media (max-width: 480px) {
    margin-top: 0.8rem; /* Ajuste para celulares */
  }
`;

export const ContaList = styled.div`
  background-color: var(--color-white);
  padding: var(--card-padding);
  border-radius: var(--card-border-radius);
  margin-top: 1rem;
  box-shadow: var(--box-shadow);
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap; /* Permite que os itens se reorganizem em telas menores */
  gap: 1.4rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: none;
  }

  @media (max-width: 768px) {
    gap: 1rem; /* Reduz o espaçamento entre os itens em tablets */
    padding: 1rem; /* Ajuste de padding para tablets */
  }

  @media (max-width: 480px) {
    gap: 0.8rem; /* Reduz ainda mais o espaçamento em celulares */
    padding: 0.8rem; /* Ajuste de padding para celulares */
    justify-content: center; /* Centraliza os itens em telas menores */
  }
`;

export const Conta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center; /* Centraliza o texto nos itens */

  .Online {
    color: var(--color-success);
  }

  @media (max-width: 480px) {
    .Online {
      font-size: 0.9rem; /* Ajuste do tamanho da fonte em celulares */
    }
  }
`;

export const ContaImg = styled.img`
  width: 5rem;
  height: 4rem;
  margin-bottom: 0.4rem;
  border-radius: 50%;
  object-fit: cover; /* Mantém a imagem dentro do círculo */

  @media (max-width: 768px) {
    width: 4.5rem; /* Reduz o tamanho da imagem em tablets */
    height: 3.8rem;
  }

  @media (max-width: 480px) {
    width: 4rem; /* Reduz ainda mais o tamanho da imagem em celulares */
    height: 3.5rem;
  }
`;
