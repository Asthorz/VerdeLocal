import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
 
  height: 100vh;
  gap: 2rem;
  width: 172vh;

`;

export const Mainfinancia = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;

  h1, h2 {
    margin-bottom: 1rem;
    color: #333;
  }

  .Card {
    padding: 1.6rem;
    height: fit-content;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-sizing: border-box;
    width: 100%;
    border-radius: 8px;
    background-color: var(--color-white);
    margin-top: 1rem;
    box-shadow: var(--box-shadow);
    transition: all 0.3s ease;
  }

  .RowContainer {
    display: flex;
    gap: 1.5rem;

    .Card {
      width: calc(50% - 0.75rem);
    }
  }

  .azul {
    color: blue;
  }

  .verde {
    color: green;
  }

  .Laranja {
    color: orange;
  }
`;

export const SaqueContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-white);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: var(--box-shadow);
  width: 100%;
  max-width: 400px;

  h2 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    color: #333;
  }

  p {
    margin-bottom: 1rem;
    color: #555;
    line-height: 1.5;
  }

  .amount {
    font-size: 2rem;
    color: #333;
    margin-bottom: 1.5rem;
  }

  button {
    background-color: #4caf50;
    color: white;
    padding: 1rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #45a049;
    }
  }
`;

export const ExtratoContainer = styled.div`
  width: 100%;
  background-color: var(--color-white);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: var(--box-shadow);

  h1 {
    margin-bottom: 1rem;
    color: #333;
  }

  .button-stack {
    margin-bottom: 2rem;
  }

  .card {
    background-color: #fff;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: var(--box-shadow);
    margin-top: 1rem;

    p {
      color: #555;
      margin-bottom: 0.5rem;
    }
  }
`;
