
import { InputSeach, Seachbox } from './styles'
import { IoSearch } from "react-icons/io5";

const PesquisaVenda = ()=> {
  return (
    <Seachbox >
        <IoSearch className='mr-2'/>
      <InputSeach type="text" placeholder='Buscar por CPF, transação, e-mail ou nome...'/>
    </Seachbox>
  )
}

export default PesquisaVenda
