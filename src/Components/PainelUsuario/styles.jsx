import styled from "styled-components";

export const NewContas = styled.div`
  margin-top: 1.3rem;
`;

export const ContaList = styled.div`
  background-color: var(--color-white);
  padding: var(--card-padding);
  border-radius: var(--card-border-radius);
  margin-top: 1rem;
  box-shadow: var(--box-shadow);
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1.4rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: none;
  }
`;

export const Conta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .Online{
    color: var(--color-success);
  }
`;

export const ContaImg = styled.img`
  width: 5rem;
  height: 4rem;
  margin-bottom: 0.4rem;
  border-radius: 50%;
`;