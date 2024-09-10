// src/components/SalesChartStyles.js
import styled from 'styled-components';

export const SalesChartContainer = styled.div`
  margin-bottom: 20px;
  width: 100%;

  @media (max-width: 768px) {
    margin-bottom: 15px; /* Ajuste de espaçamento para tablets */
  }

  @media (max-width: 480px) {
    margin-bottom: 10px; /* Ajuste de espaçamento para celulares */
  }
`;

export const Buttongrafico = styled.button`
  padding: 10px 20px;
  margin-right: 10px;
  font-size: 14px;
  cursor: pointer;
  border: none;
  border-radius: var(--border-radius-1);
  background-color: var(--color-primary);
  color: var(--color-white);
  box-shadow: var(--box-shadow);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-info-dark);
  }

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    padding: 8px 18px; /* Ajuste do padding para tablets */
    font-size: 13px;
    margin-right: 8px; /* Ajuste do espaçamento entre botões */
  }

  @media (max-width: 480px) {
    padding: 6px 15px; /* Ajuste do padding para celulares */
    font-size: 12px;
    margin-right: 5px;
  }
`;

export const ChartWrapper = styled.div`
  padding: var(--padding-1);
  background-color: var(--color-white);
  border-radius: var(--card-border-radius);
  box-shadow: var(--box-shadow);
  width: 100%;

  @media (max-width: 768px) {
    padding: var(--padding-2); /* Ajuste de padding para tablets */
  }

  @media (max-width: 480px) {
    padding: var(--padding-3); /* Ajuste de padding para celulares */
  }
`;
