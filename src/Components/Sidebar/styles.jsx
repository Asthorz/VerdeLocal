import styled from 'styled-components';

export const ContainerDash = styled.div`
  display: grid;
  width: 16rem;

  /*margin: 0 auto;/*
 /* gap: 1.8rem;/*
 /* grid-template-columns: 12rem auto 23rem;*/
 grid-template-columns: 15rem;
`;

export const Aside = styled.aside`
  height: 100vh;
`;

export const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-white);
  box-shadow: var(--box-shadow);
  height: 88vh;
  width: 100%;
  position: relative;
  
  transition: all 0.3s ease;

  &:hover {
    box-shadow: none;
  }
`;

export const MenuItem = styled.a`
  display: flex;
  align-items: center;
  color: black  ;
  height: 3.7rem;
  gap: 1rem;
  position: relative;
  margin-left: 2rem;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    color: var(--color-primary);
  }

  &.last {
    position: absolute;
    bottom: 2rem;
    width: 100%;
  }

  &.active {
    width: 100%;
    color: var(--color-primary);
    background-color: var(--color-light);
    margin-left: 0;

    &::before {
      content: '';
      width: 6px;
      height: 18px;
      background-color: var(--color-primary);
    }

    span {
      color: var(--color-primary);
      margin-left: calc(1rem - 3px);
    }
  }
`;

export const Icon = styled.span`
  font-size: 2rem;
  transition: all 0.3s ease;
`;

export const MenuItemText = styled.h3`
  font-weight: 800;
  font-size: 1rem;
margin-bottom:-0.7rem;
  color: black;
`;

export const MessageCount = styled.span`
  background-color: var(--color-danger);
  padding: 2px 6px;
  margin-bottom:-0.7rem;

  color: var(--color-white);
  font-size: 11px;
  border-radius: var(--border-radius-1);
`;
