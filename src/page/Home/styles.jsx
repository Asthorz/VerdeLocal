import styled from 'styled-components';

export const MainDashboard = styled.div`
.h1page{
    padding: 20px 20px;
    font-weight: 600;
}
`
export const HeaderDashboard= styled.main`
display: flex;
    display: grid;
    grid-template-columns: repeat( 3, minmax(320px, 3fr) );
    gap: 0.5rem;`
export const DashboardContainer = styled.div`


  h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  
  .dashboard > div {
    background-color: var(--color-white);
    padding: var(--card-padding);
    border-radius: var(--card-border-radius);
    margin-top: 1rem;
    box-shadow: var(--box-shadow);
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      box-shadow: none;
    }

    .status {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    h3 {
      margin-left: 0.6rem;
      font-size: 1rem;
    }

    .progresss {
      position: relative;
      width: 92px;
      height: 92px;
      border-radius: 50%;

      svg {
        width: 7rem;
        height: 7rem;
    

        circle {
          fill: none;
          stroke-width: 10;
          stroke-linecap: round;
          transform: translate(5px, 5px);
        }
      }

      .percentage {
        position: absolute;
        top: 4px;
        left: -1px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
      }
    }

    &.venda svg circle {
      stroke: var(--color-success);
      stroke-dashoffset: -30;
      stroke-dasharray: 200;
    }

    &.visits svg circle {
      stroke: var(--color-danger);
      stroke-dashoffset: -30;
      stroke-dasharray: 200;
    }

    &.searches svg circle {
      stroke: var(--color-primary);
      stroke-dashoffset: -30;
      stroke-dasharray: 200;
    }
  }
`;
