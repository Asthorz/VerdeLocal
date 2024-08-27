import React from 'react'
import Navbar from '../../Components/Header-Naoauh'
import { ButtonHome, Homealert, Mainhome } from './styles'
import { useNavigate } from 'react-router-dom';
import Carroselhome from '../../Components/Carrosel-Home/index'
import AlertComponent from '../../Components/alerthomem'
import QuickWithdrawalPage from '../../Components/sacahomem'
import Plataforma from '../../Components/PlataformaverdeLocal';
import Teste from '../../assets/imagem/backBoard.jpeg'
export default function Inicio() {
  const navigate = useNavigate();

  const handleCadastroClick = () => {
    navigate('/Cadastre-se');
  };
  return (
   
    <Mainhome className='w-100'> 
        <nav>
     <Navbar/>
      </nav>
      <div>
        <img src={Teste} alt='asdas' className='back'/>
             <h1 className='Homeh1'>Natural,<br></br>
                 Sustentável,Confiável,<br/>
                  para consumidores conscientes<br></br>  e produtores locais.
                  </h1>
    </div>

    <div>
      <h3 className='homeh3'>Descubra e compre alimentos orgânicos e locais diretamente dos <br></br>agricultores e produtores da sua região, promovendo práticas sustentáveis e<br></br> apoiando a economia local.</h3>
    </div>
    <ButtonHome onClick={handleCadastroClick}> Cadastrar agora </ButtonHome>


     <Carroselhome/>
     <AlertComponent/>
     <QuickWithdrawalPage/>
      <Plataforma/>
    </Mainhome>
  )
}
