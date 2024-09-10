import { Conta, ContaImg, ContaList, NewContas } from "./styles";
import Perfiluser from '../../assets/imagem/perfil.png'
const NovosUsuarios = () => {
    return (
      <NewContas>
        <h2>Novos usuários</h2>
        <ContaList>
          <Conta>
            <ContaImg src={Perfiluser} alt="perfil1" />
            <h2>Eduardo</h2>
            <p className="Online">Online</p>
          </Conta>
        </ContaList>
      </NewContas>
    );
  };
  
  export default NovosUsuarios;