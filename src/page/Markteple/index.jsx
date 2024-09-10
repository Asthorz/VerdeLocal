import React from 'react'
import { MainDashboard } from '../Home/styles'
import { HiMiniRocketLaunch } from "react-icons/hi2";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { BootstrapButton } from '../../Components/Button-Materialul/styles';
import { Conteineralta, Emalta, MainMarkplace, Messagemfiltro, Quadraicon } from './styles';
import Cardproduto from '../../assets/EventCardProduto';
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa";
import { Link } from 'react-router-dom';


export default function Marketplace() {
  return (
    <div>
        <MainMarkplace className='right-content w-100'>
       
        <div className='h1page'><h1>Marketplace</h1></div>
        <h2>Encontre aqui os melhores produto organicos para se afiliar</h2>
        <div className='row vendasBoxWrapperRow'>
                </div>
                <div className='card shadow border-0 p-3 mt-4'>
                    <h3 className='hd'></h3>
                    <Stack spacing={3} direction="row">
                    <BootstrapButton variant="contained" className='w-80'disableRipple>
        Em alta
      </BootstrapButton>
      <BootstrapButton variant="contained" className='w-80' disableRipple>
        Mais lucrativo
      </BootstrapButton>
      <BootstrapButton variant="contained" className='w-80' disableRipple>
        Novidades
      </BootstrapButton>
      <BootstrapButton variant="contained" className='w-80' disableRipple>
        Todos
      </BootstrapButton>
      <BootstrapButton variant="contained" className='Martipla 'disableRipple>
        Filtro
      </BootstrapButton>
                        </Stack>

                       

                                          </div>
         <Conteineralta>
                         <Quadraicon><HiMiniRocketLaunch/> </Quadraicon><Emalta>Em alta</Emalta> 
                          
                       <Link to='/Todos'><Messagemfiltro>Ver todos</Messagemfiltro></Link>
                        </Conteineralta>
                        <Cardproduto/> //* Card //
                        <Conteineralta>
                         <Quadraicon><FaMoneyBill1Wave/> </Quadraicon><Emalta>Mais Lucrativo</Emalta> 
                          
                       <Link to='/Todos'><Messagemfiltro>Ver todos</Messagemfiltro></Link>
                        </Conteineralta>
                        <Cardproduto/> //* Card //
                        <Conteineralta>
                         <Quadraicon><FaLightbulb/> </Quadraicon><Emalta>Novidade</Emalta> 
                          
                       <Link to='/Todos'><Messagemfiltro>Ver todos</Messagemfiltro></Link>
                        </Conteineralta>
                        <Cardproduto/> //* Card //
                        <Conteineralta>
                         <Quadraicon><HiMiniRocketLaunch/> </Quadraicon><Emalta>Todos</Emalta> 
                          
                       <Link to='/Todos'><Messagemfiltro>Ver todos</Messagemfiltro></Link>
                        </Conteineralta>
                        <Cardproduto/> //* Card //
                       

        </MainMarkplace>
    </div>
  )
}
