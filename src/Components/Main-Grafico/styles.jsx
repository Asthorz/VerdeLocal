// src/components/SalesChartStyles.js
import styled from 'styled-components';

export const SalesChartContainer = styled.div`
  margin-bottom: 20px;
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
`;

export const ChartWrapper = styled.div`
  padding: var(--padding-1);
  background-color: var(--color-white);
  border-radius: var(--card-border-radius);
  box-shadow: var(--box-shadow);
`;
