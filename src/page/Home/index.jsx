import { DashboardContainer, HeaderDashboard, MainDashboard } from './styles'; // ajuste o caminho conforme necessário
import SalesChart from '../../Components/Main-Grafico';
import NovosUsuarios from '../../Components/PainelUsuario';

const Dashboard = () => {
  return (
    <MainDashboard className='row-w100'>
        <div className='h1page'><h1>Dashboard</h1></div>
    <HeaderDashboard>
    <DashboardContainer>
      <div className="dashboard">
        <div className="venda">
          <div className="status">
            <div className="info">
              <h3>Vendas Totais</h3>
              <h1>$0,00</h1>
            </div>
            <div className="progresss">
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div className="percentage">
                <p>0%</p>
              </div>
            </div>
          </div>
        </div>
         </div>
         
    </DashboardContainer>
    <DashboardContainer>      <div className="dashboard">
    <div className="visits">
          <div className="status">
            <div className="info">
              <h3>Produtos Mais Vendidos
              </h3>
              <h1>24,981</h1>
            </div>
            <div className="progresss">
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div className="percentage">
                <p>-48%</p>
              </div>
            </div>
          </div>
        </div>
</div>
 
        </DashboardContainer>
        <DashboardContainer>
        <div className="dashboard">

        <div className="searches">
          <div className="status">
            <div className="info">
              <h3>Média de Ticket</h3>
              <h1>R$0,00</h1>
            </div>
            <div className="progresss">
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div className="percentage">
                <p>+21%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </DashboardContainer>
      <DashboardContainer>
        <div className="dashboard">

        <div className="searches">
          <div className="status">
            <div className="info">
              <h3>Novos Clientes</h3>
              <h1>0,00</h1>
            </div>
            <div className="progresss">
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div className="percentage">
                <p>+250</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </DashboardContainer>
      <DashboardContainer>
        <div className="dashboard">

        <div className="searches">
          <div className="status">
            <div className="info">
              <h3>Pedidos Pendentes</h3>
              <h1>R$0,00</h1>
            </div>
            <div className="progresss">
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div className="percentage">
                <p>10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </DashboardContainer>
      <DashboardContainer>
        <div className="dashboard">

        <div className="searches">
          <div className="status">
            <div className="info">
              <h3>Crescimento Mensal</h3>
              <h1>R$0,00</h1>
            </div>
            <div className="progresss">
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div className="percentage">
                <p>0%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </DashboardContainer>
    
    </HeaderDashboard>
    
     <SalesChart/>
     <NovosUsuarios/>
     </MainDashboard>
  );
};
export default Dashboard

