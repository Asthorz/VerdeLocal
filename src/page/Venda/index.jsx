import React from 'react'
import { MainDashboard } from '../Home/styles'
import { HeaderVendas } from './styles.jsx';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PesquisaVenda from '../../Components/PesquisaVendas/index.jsx';
import Vende1 from '../../assets/imagem/Venda1.png'
export default function Pagevendas() {
    const [age, setAge] = React.useState('');
    const [metodo, setMetodo] = React.useState('');
    const [categoria, setCategoria] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };


    return (
        <HeaderVendas>
            <MainDashboard className='right-content w-100'>
                <div className='h1page'><h1>Vendas</h1></div>
                
                <div className='row vendasBoxWrapperRow'>
                </div>
                <div className='card shadow border-0 p-3 mt-4'>
                    <h3 className='hd'>Veja seus produtos</h3>

                      <PesquisaVenda/>
                    <div className='row'>
                        <div className='col-md-2'>
                            <h4>Produto</h4>
                                                <FormControl className='w-100'>
                            <Select
          value={age}
          onChange={(e)=>setAge(e.target.value)}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          className='w-100'
        >
          <MenuItem value="">
            <em>Todos</em>
          </MenuItem>
          
        </Select>
        </FormControl>
                        </div>
                        <div className='col-md-3'>
                            <h4>Categorias</h4>
                            <FormControl className='w-100'>
                            <Select
          value={categoria}
          onChange={(e)=>setCategoria(e.target.value)}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          className='w-100'
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>

          <MenuItem value={10}>Serviços</MenuItem>
          <MenuItem value={20}>Ebooks</MenuItem>
          <MenuItem value={30}>Cursos</MenuItem>
        </Select>
        </FormControl>
       
                        </div>
                        <div className='col-md-3'>
                            <h4>Método de pagamento</h4>
                            <FormControl className='w-100'>
                            <Select
          value={metodo}
          onChange={(e)=>setMetodo(e.target.value)}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          className='w-100'
        >
          <MenuItem value="">
            <em>Pagamento</em>
          </MenuItem>
          <MenuItem value={10}>Cartão de crédito</MenuItem>
          <MenuItem value={20}>PIX</MenuItem>
          <MenuItem value={30}>Nupay</MenuItem>
          <MenuItem value={40}>Picpay</MenuItem>
          <MenuItem value={50}>Boleto</MenuItem>
          <MenuItem value={60}>Gratuito</MenuItem>
        </Select>
        </FormControl>
                        </div>
                        
                    </div>
                   <div className='row cardFilters mt-3'>

                   </div>
                   <div className='Tabela-vendas mt-3'>
                    <table className='table table-bordered'>
                        <thead className='thead-dark'>
                              <tr>
                                  <th>ID</th>
                                  <th>Produto</th>
                                  <th>Categoria</th>
                                  <th>Método de pagamento</th>
                                  <th>Data da Compra</th>
                                  <th>Nome do cliente</th>
                              </tr>
                        </thead>
                        <tbody>
                             <tr>
                                <td><img src={Vende1} alt='Markti' className='Img-Venda'/></td>
                                <td>Produtos saúdavel e Gostoso</td>
                                <td>Produto Digital</td>
                                <td>PIX</td>
                                <td>20/07/2024</td>
                                <td>jOÃO PAREIRA</td>
                                
                             </tr>
                        </tbody>

                    </table>

                   </div>
                </div>

               


            </MainDashboard>
        </HeaderVendas>
    )
}
