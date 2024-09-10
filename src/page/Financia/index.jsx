import React from 'react';
import { Mainfinancia, SaqueContainer, PageContainer, ExtratoContainer } from './styles';
import { Button } from 'react-bootstrap'; // Usar o Button do Bootstrap
import { Stack } from '@mui/material';

export default function Financia() {
  return (
    <PageContainer>
      <Mainfinancia>
        <div className="CardContainer">
          <h1>Finanças</h1>
          <h2>RESUMO</h2>
          <div className="Card">
            <h3>Total</h3>
            <h1 className="azul">R$ 0,00</h1>
          </div>
          <div className="RowContainer">
            <div className="Card">
              <h3>Saldo disponível</h3>
              <h1 className="verde">R$ 0,00</h1>
            </div>
            <div className="Card">
              <h3>Pendente</h3>
              <h1 className="Laranja">R$ 0,00</h1>
            </div>
          </div>
        </div>
      </Mainfinancia>

      <SaqueContainer>
        <h2>SOLICITAÇÃO DE SAQUE</h2>
        <p>Para solicitar um saque, é necessário o valor mínimo de R$5,00 e verificar sua identidade.</p>
        <div className="amount">R$ 0,00</div>
        <button>Solicitar serviço</button>
      </SaqueContainer>

      <ExtratoContainer>
        <h1>Extrato</h1>
        <Stack spacing={3} direction="row" className="button-stack">
          <Button variant="primary" className='' onClick={() => alert('Exportando...')}>
            Exportar
          </Button>
          <Button variant="primary" className='' onClick={() => alert('Procurando...')}>
            Procurar
          </Button>
          <Button variant="primary" className='' onClick={() => alert('Filtrando...')}>
            Filtro
          </Button>
        </Stack>
        <div className="card shadow border-0 p-3 mt-4">
          <p>Extrato vazio</p>
          <p>Aqui serão listados todas as suas movimentações financeiras.</p>
        </div>
      </ExtratoContainer>
    </PageContainer>
  );
}
